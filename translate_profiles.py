import os
import re
import json
from deep_translator import GoogleTranslator
import time
import sys

def translate_ko(text):
    if not text.strip():
        return text
    # Map common terms
    common_terms = {
        "Profile": "프로필",
        "Overview": "개요",
        "Areas of expertise": "전문 분야",
        "Experience": "경력",
        "Credentials": "자격 증명",
        "Get in touch": "연락하기",
        "Download profile (PDF)": "프로필 다운로드(PDF)",
        "Credentials & qualifications": "자격 및 인증",
        "Sector experience": "산업 경험",
        "Contact TAG Group": "TAG 그룹에 문의하기",
        "Home": "홈",
        "Leadership": "리더십",
        "Partner": "파트너",
        "Associate Partner": "어소시에이트 파트너"
    }
    if text in common_terms:
        return common_terms[text]
        
    try:
        translated = GoogleTranslator(source='en', target='ko').translate(text)
        time.sleep(0.1)
        return translated
    except Exception as e:
        print(f"Translation failed for '{text}': {e}")
        return text

people_dir = "src/app/(public)/people"
files = []
for name in os.listdir(people_dir):
    if name in ["gaurav", "mr-pradip"]:
        continue
    path = os.path.join(people_dir, name, "page.tsx")
    if os.path.exists(path):
        files.append((name, path))

english_dict = {}
korean_dict = {}

for name, path in files:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # We need to extract:
    # eyebrow (from <span className="eyebrow">)
    # name (from <h1>)
    # subtitle (from <p> after h1)
    # chips (from pill-row <span className="chip">)
    # overview desc (from <p className="lead">)
    # overview stats (from <div className="stat">)
    # expertise h4 and li
    # experience roles and desc
    # cred c1..cN (from ul check-list)
    # sectors s1..sN (from chips after sector experience)

    # Note: Regex parsing HTML is brittle but works for this specific highly uniform template.
    try:
        eyebrow_m = re.search(r'<span className="eyebrow">(.*?)</span>', content)
        name_m = re.search(r'<h1>(.*?)</h1>', content)
        subtitle_m = re.search(r'<h1>.*?</h1>\s*<p>(.*?)</p>', content)
        chips_m = re.findall(r'<span className="chip">(.*?)</span>', content)
        lead_m = re.search(r'<p className="lead"[^>]*>(.*?)</p>', content)
        
        stats_block_m = re.search(r'<div className="stats"(.*?)</div></div></div></div>', content, re.DOTALL)
        stats = []
        if stats_block_m:
            stats = re.findall(r'<div className="lbl">(.*?)</div>', stats_block_m.group(0))

        xp_grid_m = re.search(r'<div className="xp-grid">(.*?)</div>\s*</section>', content, re.DOTALL)
        expertise_h4 = []
        expertise_li = []
        if xp_grid_m:
            xp_grid = xp_grid_m.group(1)
            cols = xp_grid.split('<div className="xp-col">')
            for col in cols[1:]:
                h4 = re.search(r'<h4>(.*?)</h4>', col)
                lis = re.findall(r'<li>(.*?)</li>', col)
                if h4:
                    expertise_h4.append(h4.group(1))
                    expertise_li.append(lis)

        timeline_m = re.search(r'<div className="timeline">(.*?)</div>\s*</section>', content, re.DOTALL)
        experience = []
        if timeline_m:
            items = timeline_m.group(1).split('<div className="tl-item">')
            for item in items[1:]:
                period = re.search(r'<div className="tl-period">(.*?)</div>', item)
                role = re.search(r'<strong>(.*?)</strong>', item)
                desc = re.search(r'<p>(.*?)</p>', item)
                if period and role and desc:
                    experience.append({
                        "period": period.group(1),
                        "role": role.group(1),
                        "desc": desc.group(1)
                    })

        cred_block_m = re.search(r'<section className="svc-block" id="credentials">(.*?)</section>', content, re.DOTALL)
        creds = []
        sectors = []
        if cred_block_m:
            cred_block = cred_block_m.group(1)
            ul_m = re.search(r'<ul[^>]*>(.*?)</ul>', cred_block, re.DOTALL)
            if ul_m:
                creds = re.findall(r'<li>(.*?)</li>', ul_m.group(1))
            
            chips_block_m = re.search(r'<div className="chips">(.*?)</div>', cred_block, re.DOTALL)
            if chips_block_m:
                sectors = re.findall(r'<span className="chip">(.*?)</span>', chips_block_m.group(1))

        # Build the english dictionary object for this person
        person_id = name.replace('-', '_')
        
        en_obj = {
            "breadcrumb": { "home": "Home", "leadership": "Leadership" },
            "title": eyebrow_m.group(1) if eyebrow_m else "",
            "name": name_m.group(1) if name_m else "",
            "subtitle": subtitle_m.group(1) if subtitle_m else "",
            "chips": {},
            "nav": { "profile": "Profile", "overview": "Overview", "expertise": "Areas of expertise", "experience": "Experience", "credentials": "Credentials", "get_in_touch": "Get in touch", "email": f"Email {name.split('-')[0].capitalize()}", "download": "Download profile (PDF)" },
            "overview": {
                "title": "Overview",
                "desc": lead_m.group(1) if lead_m else ""
            },
            "expertise": {
                "title": "Areas of expertise"
            },
            "experience": {
                "title": "Experience"
            },
            "cred": {
                "title": "Credentials & qualifications",
                "sector": "Sector experience"
            },
            "cta": {
                "title": f"Work with {name.split('-')[0].capitalize()}.",
                "desc": "Reach out directly, or send a general enquiry and we'll connect you with the right team.",
                "btn": "Contact TAG Group"
            }
        }

        # Arrays to keys
        # We only use chips that are inside the first pill-row
        pill_row_chips = []
        pill_row_m = re.search(r'<div className="pill-row"[^>]*>(.*?)</div>', content)
        if pill_row_m:
             pill_row_chips = re.findall(r'<span className="chip">(.*?)</span>', pill_row_m.group(1))

        for i, c in enumerate(pill_row_chips):
            en_obj["chips"][f"c{i+1}"] = c

        for i, s in enumerate(stats):
            en_obj["overview"][f"s{i+1}"] = s

        for i, h4 in enumerate(expertise_h4):
            en_obj["expertise"][f"h{i+1}"] = h4
            for j, li in enumerate(expertise_li[i]):
                en_obj["expertise"][f"h{i+1}_l{j+1}"] = li

        for i, xp in enumerate(experience):
            en_obj["experience"][f"p{i+1}"] = xp["period"]
            en_obj["experience"][f"r{i+1}"] = xp["role"]
            en_obj["experience"][f"d{i+1}"] = xp["desc"]

        for i, c in enumerate(creds):
            en_obj["cred"][f"c{i+1}"] = c

        for i, s in enumerate(sectors):
            en_obj["cred"][f"s{i+1}"] = s


        english_dict[person_id] = en_obj
        
        # Translate to Korean
        ko_obj = {
            "breadcrumb": { "home": "홈", "leadership": "리더십" },
            "title": translate_ko(en_obj["title"]),
            "name": translate_ko(en_obj["name"]),
            "subtitle": translate_ko(en_obj["subtitle"]),
            "chips": {},
            "nav": { "profile": "프로필", "overview": "개요", "expertise": "전문 분야", "experience": "경력", "credentials": "자격 증명", "get_in_touch": "연락하기", "email": "이메일 보내기", "download": "프로필 다운로드(PDF)" },
            "overview": {
                "title": "개요",
                "desc": translate_ko(en_obj["overview"]["desc"])
            },
            "expertise": {
                "title": "전문 분야"
            },
            "experience": {
                "title": "경력"
            },
            "cred": {
                "title": "자격 및 인증",
                "sector": "산업 경험"
            },
            "cta": {
                "title": translate_ko(en_obj["cta"]["title"]),
                "desc": translate_ko(en_obj["cta"]["desc"]),
                "btn": "TAG 그룹에 문의하기"
            }
        }
        
        for k, v in en_obj["chips"].items(): ko_obj["chips"][k] = translate_ko(v)
        for i in range(1, len(stats) + 1): ko_obj["overview"][f"s{i}"] = translate_ko(en_obj["overview"].get(f"s{i}", ""))
        
        for i in range(1, len(expertise_h4) + 1):
            ko_obj["expertise"][f"h{i}"] = translate_ko(en_obj["expertise"].get(f"h{i}", ""))
            for j in range(1, len(expertise_li[i-1]) + 1):
                ko_obj["expertise"][f"h{i}_l{j}"] = translate_ko(en_obj["expertise"].get(f"h{i}_l{j}", ""))

        for i in range(1, len(experience) + 1):
            ko_obj["experience"][f"p{i}"] = translate_ko(en_obj["experience"].get(f"p{i}", ""))
            ko_obj["experience"][f"r{i}"] = translate_ko(en_obj["experience"].get(f"r{i}", ""))
            ko_obj["experience"][f"d{i}"] = translate_ko(en_obj["experience"].get(f"d{i}", ""))

        for i in range(1, len(creds) + 1): ko_obj["cred"][f"c{i}"] = translate_ko(en_obj["cred"].get(f"c{i}", ""))
        for i in range(1, len(sectors) + 1): ko_obj["cred"][f"s{i}"] = translate_ko(en_obj["cred"].get(f"s{i}", ""))

        korean_dict[person_id] = ko_obj
        print(f"Processed {name}")

    except Exception as e:
        print(f"Error parsing {name}: {e}")

# Save JSON
with open('people_en.json', 'w', encoding='utf-8') as f:
    json.dump(english_dict, f, ensure_ascii=False, indent=2)

with open('people_ko.json', 'w', encoding='utf-8') as f:
    json.dump(korean_dict, f, ensure_ascii=False, indent=2)

print("Translation JSON generated successfully.")

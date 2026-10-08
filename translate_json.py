import json
from deep_translator import GoogleTranslator
import time

def translate_ko(text):
    if not text or not isinstance(text, str) or not text.strip():
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
        time.sleep(0.5)
        return translated
    except Exception as e:
        print(f"Translation failed for '{text}': {e}")
        return text

def translate_dict(d):
    result = {}
    for k, v in d.items():
        if isinstance(v, dict):
            result[k] = translate_dict(v)
        elif isinstance(v, str):
            result[k] = translate_ko(v)
        else:
            result[k] = v
    return result

print("Loading people_en.json...")
with open('people_en.json', 'r', encoding='utf-8') as f:
    en_data = json.load(f)

print("Translating to Korean...")
ko_data = translate_dict(en_data)

print("Saving people_ko.json...")
with open('people_ko.json', 'w', encoding='utf-8') as f:
    json.dump(ko_data, f, ensure_ascii=False, indent=2)

print("Done!")

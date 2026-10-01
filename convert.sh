#!/bin/bash
DOCX_DIR="/home/ankit/Downloads/TAG Group - Word Files (2)/Partner Profiles"
OUT_DIR="/home/ankit/Desktop/tag/public/assets/profiles"

cd "$DOCX_DIR" || exit 1

for file in "TAG Group Profile - "*.docx; do
  name=$(basename "$file" .docx | sed 's/TAG Group Profile - //')
  
  target=""
  case "$name" in
    "Amit Sood") target="amit.pdf" ;;
    "Awen Lee") target="awen.pdf" ;;
    "Gaurav Sharma") target="gaurav.pdf" ;;
    "Hasina Bahemia") target="hasina.pdf" ;;
    "Ishita Sharma") target="ishita.pdf" ;;
    "Jai Prakash") target="jai.pdf" ;;
    "K. Vishnu Sharma") target="k-vishnu.pdf" ;;
    "Karuna Sharma") target="karuna.pdf" ;;
    "M R Pradip") target="mr-pradip.pdf" ;;
    "Manuj Singhal") target="manuj.pdf" ;;
    "Naresh Kumar Goel") target="naresh.pdf" ;;
    "Sumit Goyal") target="sumit.pdf" ;;
    "Sushil Sharma") target="sushil.pdf" ;;
    "Vishal Tayal") target="vishal.pdf" ;;
    *) echo "Unknown file: $file"; continue ;;
  esac
  
  echo "Converting $file to $target..."
  libreoffice --headless --convert-to pdf "$file" --outdir "/tmp/" > /dev/null 2>&1
  
  pdf_file="/tmp/TAG Group Profile - ${name}.pdf"
  
  if [ -f "$pdf_file" ]; then
    mv "$pdf_file" "$OUT_DIR/$target"
  else
    echo "Failed to convert $file"
  fi
done
echo "Done"

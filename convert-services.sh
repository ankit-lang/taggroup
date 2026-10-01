#!/bin/bash
DOCX_DIR="/home/ankit/Downloads/TAG Group - Word Files (2)/Service Portfolios"
OUT_DIR="/home/ankit/Desktop/tag/public/assets/service-pdfs"

cd "$DOCX_DIR" || exit 1

for file in "TAG Group Service Portfolio - "*.docx; do
  name=$(basename "$file" .docx | sed 's/TAG Group Service Portfolio - //')
  
  target=""
  case "$name" in
    "CFO and Finance Transformation") target="cfo-finance-transformation.pdf" ;;
    "Corporate, Legal, FEMA and Regulatory") target="corporate-legal-fema.pdf" ;;
    "Deals, Valuation and Transaction Support") target="deals-valuation.pdf" ;;
    "Global Capability Centre") target="global-capability-centre.pdf" ;;
    "Global Transfer Pricing") target="global-transfer-pricing.pdf" ;;
    "Human Capital and HR Advisory") target="human-capital-hr.pdf" ;;
    "India Entry") target="india-entry.pdf" ;;
    "International Business") target="international-business.pdf" ;;
    "Risk, Internal Audit and Controls") target="risk-internal-audit.pdf" ;;
    "Tax and Cross-Border Advisory") target="tax-cross-border.pdf" ;;
    *) echo "Unknown file: $file"; continue ;;
  esac
  
  echo "Converting '$file' to '$target'..."
  libreoffice --headless --convert-to pdf "$file" --outdir "/tmp/" > /dev/null 2>&1
  
  pdf_file="/tmp/TAG Group Service Portfolio - ${name}.pdf"
  
  if [ -f "$pdf_file" ]; then
    mv "$pdf_file" "$OUT_DIR/$target"
  else
    echo "Failed to convert $file"
  fi
done
echo "Done"

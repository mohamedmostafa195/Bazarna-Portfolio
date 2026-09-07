import json

with open('pdf_content.json', encoding='utf-8') as f:
    pages = json.load(f)

for p in pages:
    txt = ' '.join(p['text'].split())
    print(f"Page {p['page']:02d}: {txt[:140]}")

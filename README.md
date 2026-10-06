# MedLab Boards — Quiz App

A self-contained, single-page quiz app for practicing multiple-choice board-exam
questions, pre-loaded with **1,266 questions** across five chapters:
Hematology, Hemostasis & Coagulation, Urinalysis & Body Fluids, Immunology,
and Clinical Chemistry.

No build step, no server-side code, no dependencies to install — it's just
HTML, CSS, and JavaScript that runs entirely in your browser.

## Files

| File            | What it is                                                         |
|-----------------|--------------------------------------------------------------------|
| `index.html`    | The app itself — layout, styling, and all quiz logic.              |
| `questions.js`  | The default question bank (1,266 questions) as a plain JS array.   |
| `README.md`     | This file.                                                         |

`questions.md` and `questions.txt` are identical copies of `questions.js`
(same text, different extension) in case your browser or email blocks `.js`
downloads. If you use one of them, save its contents as `questions.js` next
to `index.html`.

Keep `index.html` and `questions.js` in the **same folder** — `index.html`
loads `questions.js` alongside it.

## How to run it

### Option 1 — Just open it (fastest)

Double-click `index.html`, or drag it into your browser window. The quiz loads
immediately with all 1,266 questions. Works in Chrome, Firefox, Safari, and
Edge.

### Option 2 — Run it through a local web server (recommended)

Opening a file directly (`file://...`) can make some browsers restrict
`localStorage`, which the app uses to remember your progress, flags, and score
between visits. To make that reliable, serve the folder over `http://`:

**Python (installed on most Mac/Linux machines):**
```bash
cd path/to/this/folder
python3 -m http.server 8000
```
Then open **http://localhost:8000**.

**Node.js:**
```bash
cd path/to/this/folder
npx serve .
```

**VS Code:** install "Live Server", right-click `index.html`, choose
"Open with Live Server."

Your saved progress lives in that browser's local storage, tied to how you
opened the page — opening via `file://` and via `http://localhost` look like
two different sites, so each keeps its own progress.

## Using the app

- Click an answer for instant feedback (green = correct, red = incorrect) and
  the explanation.
- Use the chapter tabs and topic dropdown to filter, or the "Go to #" slider
  and box to jump to any question.
- Bookmark tricky questions with the flag icon and review them via **Flagged**.
- Questions you get wrong are added to the **Missed** list, where you can
  retry them one at a time.
- Questions that include a figure show it above the answers; click it to
  enlarge. Some questions include a data table.
- The bar-chart icon opens an accuracy breakdown by topic.

## Loading your own questions

Click the upload icon to import your own question bank as a JSON file. The
import dialog shows the schema and lets you copy a template. Each question
looks like:

```json
{
  "id": 1,
  "section": "Basic Hematology",
  "chapter": "Hematology",
  "question": "Insufficient centrifugation will result in:",
  "options": [
    "A false increase in Hct value",
    "A false decrease in Hct value",
    "No effect on Hct value",
    "All of these, depending on the patient"
  ],
  "answer": "A",
  "explanation": "Insufficient centrifugation does not pack down RBCs..."
}
```

`answer` can be the option letter (`"A"`), a 0-based index, or the exact option
text. `section`, `chapter`, `id`, and `explanation` are optional.

Optional extras:

- `"image"`: a `data:image/...;base64,...` string, shown above the answers.
- `"table"`: `{ "rows": [["Header 1", "Header 2"], ["a", "b"]], "note": "optional footnote" }`.
  The first row is the header. Put `{{table}}` in the question text to place
  the table in the middle of it; otherwise it appears right after the question.

Use "Use sample bank instead" in the import dialog to switch back to the
built-in 1,266 questions at any time.

## Notes

- Everything runs client-side — no data is sent anywhere. The only network
  request is the Google Fonts stylesheet; without internet the app falls back
  to your system font.
- Progress, flags, and any imported bank are saved in your browser's local
  storage. Clearing your browser's site data for this page resets everything.
- Question numbers 1–511 are unchanged from the earlier version, so progress
  you already saved still lines up; the new Immunology and Clinical Chemistry
  questions are numbered 512–1266.

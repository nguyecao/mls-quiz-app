# MedLab Boards — Quiz App

A self-contained, single-page quiz app for practicing multiple-choice board-exam
questions, pre-loaded with 511 questions covering Hematology, Hemostasis &
Coagulation, and Urinalysis & Body Fluids.

No build step, no server-side code, no dependencies to install — it's just
HTML, CSS, and JavaScript that runs entirely in your browser.

## Files

| File            | What it is                                                        |
|-----------------|--------------------------------------------------------------------|
| `index.html`    | The app itself — layout, styling, and all quiz logic.             |
| `questions.js`  | The default question bank (511 questions) as a plain JS array.    |
| `README.md`     | This file.                                                         |

Keep both files in the **same folder** — `index.html` loads `questions.js`
alongside it.

## How to run it

### Option 1 — Just open it (fastest)

Double-click `index.html`, or drag it into your browser window. That's it —
the quiz loads immediately with all 511 questions.

This works in every modern browser (Chrome, Firefox, Safari, Edge). It's the
simplest option and is fine for personal use.

### Option 2 — Run it through a local web server (recommended)

Opening a file directly (`file://...`) can make some browsers restrict
`localStorage`, which the app uses to remember your progress, flags, and
score between visits. If you want that to work reliably, serve the folder
over `http://` instead:

**Using Python (already installed on most Mac/Linux machines):**
```bash
cd path/to/this/folder
python3 -m http.server 8000
```
Then open **http://localhost:8000** in your browser.

**Using Node.js:**
```bash
cd path/to/this/folder
npx serve .
```
Then open the URL it prints (usually **http://localhost:3000**).

**Using VS Code:**
Install the "Live Server" extension, right-click `index.html`, and choose
"Open with Live Server."

No matter which option you pick, closing the terminal/server afterward
doesn't delete anything — your saved progress lives in that browser's local
storage, tied to how you opened the page (so switching between Option 1 and
Option 2 will look like a "fresh" quiz, since each is a different origin as
far as the browser is concerned).

## Using the app

- Click an answer to see instant feedback (green = correct, red = incorrect)
  and the explanation.
- Use the topic tabs and dropdown to filter by subject, or the "Go to #"
  slider to jump to any question.
- Bookmark tricky questions with the flag icon and review them later via the
  **Flagged** pill.
- Any question you get wrong is automatically added to the **Missed** list —
  open it to see what you missed and retry individual questions.
- The bar-chart icon in the header opens a breakdown of your accuracy by
  topic.

## Loading your own questions

Click the upload icon to import your own question bank as a JSON file. The
import dialog shows the exact schema and lets you copy a template. In short,
each question looks like:

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

`answer` can be the option letter (`"A"`), a 0-based index, or the exact
option text. `section` and `chapter` are optional (used only for filtering),
and so are `id` and `explanation`.

Use the "Use sample bank instead" button in that same dialog to switch back
to the original 511-question set at any time.

## Notes

- Everything runs client-side — no data is sent anywhere, and no internet
  connection is required except to load the Google Fonts used for
  typography (the app still works fine without it; it just falls back to
  your system font).
- Your progress, flags, and any imported question bank are saved in your
  browser's local storage, per the way you're accessing the page (see
  "Option 2" above). Clearing your browser's site data for this page will
  reset everything.

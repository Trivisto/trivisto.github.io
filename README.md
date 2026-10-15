# Trivisto — app hub

The home page for every Trivisto app: **https://trivisto.github.io**

## Adding a new app (the protocol)

Open `apps.json` and add one entry to the `apps` list. Every app uses the same fields:

| Field | What to put |
|---|---|
| `id` | short lowercase name, no spaces — e.g. `beatsync` |
| `number` | its number in the 100 — e.g. `4` |
| `name` | the app's name — e.g. `Beat Sync` |
| `tagline` | **one line**, what it does — e.g. `Find every beat in a song.` |
| `description` | **2 sentences**: what it is, then why it's good |
| `features` | exactly **3** short features — e.g. `["Beat markers", "Works offline", "CapCut export"]` |
| `category` | e.g. `Audio`, `Image`, `Video`, `Files`, `Games`, `Tools` |
| `accent` | two colours for the card — e.g. `["#f472b6", "#a78bfa"]` |
| `icon` | a square PNG uploaded to the repo root (not a folder) — e.g. `beatsync.png` (leave `""` for a letter icon) |
| `version` | e.g. `1.0.0` (updates automatically from GitHub releases when `repo` is set) |
| `released` | e.g. `2026-11` |
| `website` | the app's own page |
| `download` | direct installer link — e.g. `https://github.com/trivisto/beatsync/releases/latest/download/BeatSync-Setup.exe` |
| `repo` | e.g. `trivisto/beatsync` (or `""` if it's not on GitHub) |
| `type` | optional. `"web"` for a web app (runs in the browser, no installer): the card gets a blue **Web app · iPhone, Android & PC** badge and an **Open** button that goes to `website`. Leave it out for Windows apps. |

The counter, the 100 dots, the search and the filters all update by themselves.

## Bug reports & suggestions

The **Report bug** / **Suggest** buttons fill in a GitHub issue on this repo, labelled with the app's name.
Read them all in the **Issues** tab.

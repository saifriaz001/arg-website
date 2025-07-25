- Mark resuable components, make almost everything as reusable
- Apply generic css to all
- make responsive, flex row col accordingly

NewsBlogs.jsx main page,
components in NewsPageComponenents folder
css in yahya-css
images in yahya-images

🟢 1. Update News Dummy Data
Convert all date fields in newsData to "YYYY-MM-DD" format (e.g., "2025-07-22").

Ensure display remains as "JULY 22, 2025" by formatting on the frontend.

🟢 2. Add Sort Functionality (Newest / Oldest)
In NewsBlogs.jsx, add logic to sort news based on date.

Update SortBar.jsx to call onSortChange("newest" / "oldest").

Tie SortBar button to the sorting logic using props.

🟢 3. Normalize News Data Keys for Filters
Fix casing mismatch: e.g., market: "Industrial" in data vs "Market" in filters.

Convert both keys to lowercase for reliable matching.

🟢 4. Pass Filters State to FilterUIBar.jsx
Manage filters in NewsBlogs.jsx.

Pass selected filter values to FilterUIBar.jsx to highlight selected values (e.g., Types: News).

🟢 5. Update FilterUIBar Display
Show selected value next to each filter button.

Example: Types: News ↓

Toggle arrows (up/down) correctly based on dropdown state.

🟢 6. Implement Filter Logic
Allow only one selected value per filter category (e.g., one Type, one Market).

Filter news list accordingly in NewsBlogs.jsx.

🟢 7. Implement “Clear Filter” Button
Hook into the SortBar component’s existing button.

When clicked:

Clear all selected filters.

Reset filtered news to full list.

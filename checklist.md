### PHASE 1 Skeletons and Organization

- [x] npm install
    - [x] redux
    - [x] router
- [x] db in postico
- [x] components
    - [x] Header
    - [x] Home
    - [x] Feelings
        - [x] input dropdown 1-5
        - [x] next
    - [x] Understanding
        - [x] input dropdown 1-5
        - [x] next
    - [x] Support
        - [x] input dropdown 1-5
        - [x] next
    - [x] Comments
        - [x] input 
        - [x] next
    - [x] Review
        - [x] show previous review info
        - [x] submit button
    - [x] Thanks
        - [x] button to leave new feedback
- [x] HashRouter
    - [x] /
    - [x] /feelings
    - [x] /understanding
    - [x] /support
    - [x] /comments
    - [x] /review
    - [x] /thanks
- [x] Redux/Index
    - [x] reducers
        - [x] feelings
        - [x] understanding
        - [x] support
        - [x] comments
- [x] db 'prime_feedback'
- [x] routes
    - [x] POST route in Review component
    - [x] server side of route(s)

### PHASE 2 Flesh Out and Styling

- [x] next buttons advance survey to next question
    - [x] history push
- [ ] table on review page
- [ ] reset fields to empty on form submission
    - [ ] dispatch 'EMPTY_FIELDS' -> empty
- [ ] style buttons to look better, add cute pictures

### PHASE 3 Cleanup

- [ ] Comments
- [ ] Semi-colons, commas, etc.
- [ ] Prettier (indentation)

### PHASE 4 Stretch (optional)

- [ ] allow a user to go back and change their score
    - [ ] back button
- [ ] admin section at /admin
    - [ ] display all db feedback with most recent submission at top
    - [ ] can delete existing feedback (prompt user to confirm)
    - [ ] ability to flag an entry for review

### PHASE 5 Deployment

- [ ] Heroku
- [ ] README.md
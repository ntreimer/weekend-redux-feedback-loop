### PHASE 1 Skeletons and Organization

- [x] npm install
    - [x] redux
    - [x] router
- [ ] db in postico
- [ ] components
    - [ ] Header
    - [ ] Home
    - [ ] Feelings
        - [ ] input dropdown 1-5
        - [ ] next
    - [ ] Understanding
        - [ ] input dropdown 1-5
        - [ ] next
    - [ ] Support
        - [ ] input dropdown 1-5
        - [ ] next
    - [ ] Comments
        - [ ] input VARCHAR 300
        - [ ] next
    - [ ] Review
        - [ ] show previous review info
        - [ ] submit button
    - [ ] Thanks
        - [ ] button to leave new feedback
- [ ] HashRouter
    - [x] /
    - [x] /feelings
    - [x] /understanding
    - [x] /support
    - [x] /comments
    - [x] /review
    - [x] /thanks
- [ ] Redux/Index
    - [ ] reducers
        - [ ] feelings
        - [ ] understanding
        - [ ] support
        - [ ] comments
- [ ] db 'prime_feedback'
- [ ] routes
    - [ ] POST route in Review component
    - [ ] server side of route(s)

### PHASE 2 Flesh Out and Styling

- [ ] next buttons advance survey to next question
    - [ ] history push
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
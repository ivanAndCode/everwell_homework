beforeEach(() => {
  cy.visit("/")
  cy.prepareAndCleanup()
  cy.loginViaUI()
})

afterEach(() => {
  cy.prepareAndCleanup()
})

describe('User should be able to', () => {
  it('create a new appointment for today', () => {
    const appointmentDetails = {
      name: 'Test appointment', //preferably needs a dynamic uniqueness element
      date: new Date().toLocaleDateString(), //will produce something like 5/12/2024... need to know format requirements and tweak accordingly
      time: '11 AM' //what are the time format? AM/PM or 24 hours? How to parse it?
    }
    addNewAppointment(appointmentDetails)
    checkTheAppointment(appointmentDetails)
    checkTheEmail()
  })
})

function addNewAppointment(appointmentDetails) {
  const newAppointmentButtonSelector = '.new-appointment-button'
  const appointmentModal = '.new-appointment-modal'
  const appointmentNameSelector = '.appointment-name'
  const appointmentDateSelector = '.appointment-date'
  const appointmentTimeSelector = '.appointment-time'
  const appointmentSaveButtonSelector = '.appointment-save-button'

  cy.get(newAppointmentButtonSelector).click()

  //fill the details
  cy.get(appointmentNameSelector).type(appointmentDetails.name)
  cy.get(appointmentDateSelector).type(appointmentDetails.date)
  cy.get(appointmentTimeSelector).type(appointmentDetails.time)

  //save it
  //intercept provides a network call sync to wait for it to be properly saved on the backend
  cy.intercept('POST', '/add').as('saveAppointment')
  cy.get(appointmentSaveButtonSelector).click()
  cy.wait('@saveAppointment')

  //validate modal is gone
  cy.get(appointmentModal).should('not.exist')
}

function checkTheAppointment(appointmentDetails) {
  cy.findByLabelText(appointmentDetails.name).should('exist')
  //note there might be more assertions here to find that date/time matches
  // but this should be validated with the combination of
  // an API test + unit test for React component rendering the event into the grid
}

function checkTheEmail() {
  //use something like imap-simple: https://www.npmjs.com/package/imap-simple
  //what is the process that triggers a email sending queue??
  //this should probably be tested not via UI E2E tests...
}

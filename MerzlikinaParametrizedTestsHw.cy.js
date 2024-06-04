 describe('parametrized test', () => {
const testCases = [
    {emailData: 'myrealmail.com', passwordData: "12323",
     recipientsData: 'Some Recipients', subjectData: 'Some Subject',
     messageData: 'Some message', firstNameData: 'Valeriia', lastNameData:'Merzlikina',
     websiteData: 'coolsite.com'
    },
   ];

  testCases.forEach(({emailData, passwordData,
  recipientsData, subjectData,messageData,
  firstNameData, lastNameData, websiteData,
  }) => {

it(`Enter different data in forms`, () => {
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
  cy.get('.theme-preview[alt="Cosmic Theme"]').click();
  cy.get('[title="Forms"]').click();
  cy.get('[title="Form Layouts"]').click();

  cy.log("Fill in Inline form");
  cy.get('[placeholder="Jane Doe"]').type(firstNameData);

  cy.log("Fill in Using the Grid form");
  cy.get('.label.col-sm-3.col-form-label').contains('Email').type(emailData);
  cy.get('[id="inputPassword2"]').type(passwordData);

  cy.log("Fill in Basic form form");
  cy.get('[id="exampleInputEmail1"]').type(emailData);
  cy.get('[id="exampleInputPassword1"]').type(passwordData);

  cy.log("Fill in Form without labels");
  cy.get('[placeholder="Recipients"]').type(recipientsData);
  cy.get('[placeholder="Subject"]').type(subjectData);
  cy.get('[placeholder="Message"]').type(messageData);

  cy.log("Fill in Block form")
  cy.get('[placeholder="First Name"]').type(firstNameData);
  cy.get('[placeholder="Last Name"]').type(lastNameData);
  cy.get('.col-sm-6').contains('Email').type(emailData);
  cy.get('[placeholder="Website"]').type(websiteData);

  cy.log("Fill in Horizontal form");
  cy.get('[id="inputEmail3"]').type(emailData);
  cy.get('[id="inputPassword3"]').type(passwordData);
     })
   })
 })

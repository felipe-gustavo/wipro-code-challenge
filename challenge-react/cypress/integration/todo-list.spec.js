describe('To do list', () => {
  // Delay to type
  const delay = 50;

  beforeEach(() => {
    cy.visit('http://localhost:3000');

    cy.get('input[data-test-id="task"]').as('input');
    cy.get('button[data-test-id="add-task"]').as('button');
    cy.get('[data-test-id="list"]').as('list');
    cy.get('[data-test-id="total-remaining-tasks"]').as('total-remaining-tasks');
    cy.get('[data-test-id="total-completed-tasks"]').as('total-completed-tasks');

    cy.fixture('tasks').as('tasks');
  });

  it('Checks interface', () => {
    cy.get('[data-test-id="title"]').should('have.text', 'To do list');

    cy.get('@input').should('have.value', '');
    cy.get('@button').should('have.text', 'Add')

    cy.get('@total-remaining-tasks').should('have.text', '0');
    cy.get('@total-completed-tasks').should('have.text', '0');
  });

  it('Write some tasks', function () {
    cy.get('@input')
      .type(this.tasks[0], { delay })
      .should('have.value', this.tasks[0]);
    cy.get('@button').click()
    cy.get('@input').should('have.value', '');

    cy.get('@input')
      .type(this.tasks[1], { delay })
      .should('have.value', this.tasks[1])
      .type('{enter}');
    cy.get('@input').should('have.value', '');

    cy.get('@list').find('[data-test-id^="item-"]').should('have.length', 2);

    cy.get('@list').find('[data-test-id="item-0"] [data-test-id="task-name"]').should('have.text', this.tasks[0]);
    cy.get('@list').find('[data-test-id="item-1"] [data-test-id="task-name"]').should('have.text', this.tasks[1]);

    cy.get('@total-remaining-tasks').should('have.text', '2');
    cy.get('@total-completed-tasks').should('have.text', '0');
  });

  describe('Validate to do list', () => {
    beforeEach(function () {
      this.tasks.forEach((task) => {
        cy.get('@input').type(task, { delay });
        cy.get('@button').click();
      });
      cy.get('@list').find('[data-test-id^="item-"]').should('have.length', this.tasks.length);

      // check after add
      cy.get('@total-remaining-tasks').should('have.text', this.tasks.length);
      cy.get('@total-completed-tasks').should('have.text', '0');

      cy.get('@list').find('[data-test-id^="item-"]').as('items');
    })

    it('Complete all tasks', function () {
      cy.get('@list').find('input[type="checkbox"]').click({ multiple: true });
      cy.get('@total-remaining-tasks').should('have.text', '0');
      cy.get('@total-completed-tasks').should('have.text', this.tasks.length);
    });

    it('Reject all tasks', function () {
      cy.get('@list').find('button[data-test-id="remove-task"]').click({ multiple: true });
      cy.get('@total-remaining-tasks').should('have.text', '0');
      cy.get('@total-completed-tasks').should('have.text', '0');
    });

    it('Try insert a duplicated task', function () {
      cy.get('@input').type(`${this.tasks[0]}{enter}`, { delay });
      cy.get('@total-remaining-tasks').should('have.text', this.tasks.length);
      cy.get('@total-completed-tasks').should('have.text', '0');
    });

    it('Mix compled and rejected tasks', function () {

      const info = [
        'completed',
        'completed',
        'removed',
        'removed',
        'in-progress'
      ];

      info.forEach((todoStatus, i) => {
        switch (todoStatus) {
          case 'completed':
            cy.get('@items').eq(i).find('input[type="checkbox"]').click();
            break;
          case 'removed':
            cy.get('@items').eq(i).find('button[data-test-id="remove-task"]').click();
            break;
          default:
        }
      });

      info.forEach((todoStatus, i) => {
        cy.get('@items').eq(i)
          .should('have.attr', 'data-test-status', todoStatus)
          .find('[data-test-id="task-name"]').should('have.text', this.tasks[i]);

        switch (true) {
          case todoStatus === 'completed':
          case todoStatus === 'removed':
            cy.get('@items').eq(i).find('input[type="checkbox"]').should('have.attr', 'disabled');
            cy.get('@items').eq(i).find('button[data-test-id="remove-task"]').should('not.exist');
            break;
          default:
            cy.get('@items').eq(i).find('input[type="checkbox"]').should('not.have.attr', 'disabled');
        }
      });

      cy.get('@total-remaining-tasks').should(
        'have.text',
        info.filter((status) => (status === 'in-progress')).length
      );
      cy.get('@total-completed-tasks').should(
        'have.text',
        info.filter((status) => (status === 'completed')).length
      );
    });
  });
})


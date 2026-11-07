
describe('OrangeHRM - E2E Testing', () => {

  const username = `admin${Date.now()}`;
  const password = 'Admin@12345';

  it('Login, akses Admin, dan menambahkan Admin User', () => {

    // 1. LOGIN
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');
    cy.contains('h6', 'Dashboard').should('be.visible');

    cy.screenshot('01-dashboard');

    // 2. AKSES MENU ADMIN
    cy.contains('.oxd-main-menu-item', 'Admin').click();

    cy.url().should('include', '/admin/viewSystemUsers');
    cy.contains('h6', 'User Management').should('be.visible');

    cy.screenshot('02-admin-page');

    // 3. MEMBUKA FORM ADD USER
    cy.contains('button', 'Add').click();

    cy.contains('h6', 'Add User').should('be.visible');

    cy.screenshot('03-add-user-form');

    // 4. MENGISI FORM USER BARU

    // User Role
    cy.contains('.oxd-input-group', 'User Role')
      .find('.oxd-select-text')
      .click();

    cy.contains('.oxd-select-option', 'Admin').click();

    // Employee Name
    cy.contains('.oxd-input-group', 'Employee Name')
      .find('input')
      .clear()
      .type('Amelia');

    cy.contains('.oxd-autocomplete-option', 'Amelia Brown', {
      timeout: 10000
    })
      .should('be.visible')
      .click();

    // Memastikan Employee Name sudah terisi
    cy.contains('.oxd-input-group', 'Employee Name')
      .find('input')
      .should('not.have.value', '');

    // Status
    cy.contains('.oxd-input-group', 'Status')
      .find('.oxd-select-text')
      .click();

    cy.contains('.oxd-select-option', 'Enabled').click();

    // Username
    cy.contains('.oxd-input-group', 'Username')
      .find('input')
      .type(username);

    // Password
    cy.contains('.oxd-input-group', 'Password')
      .find('input')
      .type(password);

    // Confirm Password
    cy.contains('.oxd-input-group', 'Confirm Password')
      .find('input')
      .type(password);

    // 5. MENYIMPAN USER
    cy.contains('button', 'Save').click();

    cy.contains('Successfully Saved', {
      timeout: 15000
    }).should('be.visible');

    // 6. MEMASTIKAN USER BERHASIL DITAMBAHKAN
    cy.contains('.oxd-input-group', 'Username')
      .find('input')
      .should('have.value', '')
      .type(username);

    cy.contains('button', 'Search').click();

    cy.get('.oxd-table', {
      timeout: 15000
    }).should('contain', username);

    cy.screenshot('04-admin-user-result');

  });

});

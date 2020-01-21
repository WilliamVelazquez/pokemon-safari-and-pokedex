describe('Pokédex Test', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.get('.screen__plate').should('be.visible');
	});

	it('Loading Pokédex', () => {
		cy.wait(1000);
		cy.screenshot('loading-pokedex');
	});

	it.skip('Starting Safari', () => {
		cy.visit('/safari');
	});

	it('Switching the Language to ES', () => {
		cy.get('.selected--flag--option').click();
		cy.contains('.flag-options .country-label','ES-MX').click();
		cy.wait(2000);
		cy.contains('.selected--flag--option', 'ES-MX').should('be.visible');
		cy.contains('.header__menu li a', 'Mi PC').should('not.visible');
		cy.screenshot('switching-language-ES');
	});

	it('Switching the Language to EN', () => {
		cy.get('.selected--flag--option').click();
		cy.contains('.flag-options .country-label','EN-US').click();
		cy.wait(2000);
		cy.contains('.header__menu li a', 'My PC').should('not.visible');
		cy.screenshot('switching-language-EN');
	});
	
	it('Viewing Pokémon information', () => {
		cy.wait(2000);
		cy.get('.infoCard__container').should('not.visible');
		cy.get('.list__container img').eq(1).click();
		// cy.get('.list__container img').first().click();
		cy.wait(2000);
		cy.get('.infoCard__container').should('be.visible');
		cy.screenshot('viewing-pokemon-information');
	});

	it('Searching Pokémon Information by Name - Pikachu', () => {
		cy.wait(2000);
		cy.get('.searchBox__form input').type('Pikachu');
		cy.get('.searchBox__box.btn__container .btn__image').click();
		cy.wait(2000);
		cy.get('.infoCard__container').should('be.visible');
		cy.get('.infoCard__data .infoCard__data__title h2').contains('Pikachu');
		cy.screenshot('searching-pokemon-information-by-name-pikachu');
	});
	
	it('Searching Pokémon Information by Id - Pikachu(25)', () => {
		cy.wait(2000);
		cy.get('.searchBox__form input').type('25');
		cy.get('.searchBox__box.btn__container .btn__image').click();
		cy.wait(2000);
		cy.get('.infoCard__container').should('be.visible');
		cy.get('.infoCard__data .infoCard__data__title h2').contains('Pikachu');
		cy.screenshot('searching-pokemon-information-by-id-pikachu-25');
	});

	it('Failing while Searching for a Pokémon information by Id', () => {
		cy.wait(2000);
		cy.get('.error-message').should('not.visible');
		cy.get('.searchBox__form input').type('999999');
		cy.get('.searchBox__box.btn__container .btn__image').click();
		cy.wait(1000);
		cy.get('.error-message').should('be.visible');
		cy.get('.infoCard__container').should('not.visible');
		cy.screenshot('failing-pokemon-information-search-by-id');
	});

	after(() => {
		cy.log('Tests Completed!');
	});
})

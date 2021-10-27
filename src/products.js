const PRODUCTS = `
<h1 style="margin-top: 2rem;">PRODUCTS</h1>
<main>
	<section class="cards" id="__cards"></section>
	<div id="__modals"></div>

</main>

`

const contentProducts = document.getElementById('PRODUCTS')
contentProducts.innerHTML = PRODUCTS

const DATABASE = './src/database/db.json'

var xhr = new XMLHttpRequest();
xhr.open("GET", DATABASE);

xhr.onreadystatechange = function () {
if (xhr.readyState === 4) {
    console.log(xhr.status);
    const responseDB = JSON.parse(xhr.responseText);

    responseDB.forEach((element, i) => {
        $(document).ready(() => {
       
            const __CARD = `
            <div class="card">
				<div class="card-image">
					<img src="${element.image_product}" />
				</div>
				<div class="card-text">
					<a href="#product${element.id}">${element.name_product}</a>
					<p>${element.describe}</p>
				</div>
				<div class="card-inner">
					<div>
						<p>$ ${element.price}</p>
					</div>
				</div>
			</div>
            `;

            const __MODALS = `
            <div class="modal" id="product${element.id}">
				<div>
				<a href="#/products" class="close">x</a>
					<div class="content-model">
						<div class="image-product" style="margin-right: 1rem;">
							<img src="${element.image_product}"/> 
						</div>
						<div class="info-product">
							<div>
								<h1>${element.name_product}</h1>
								<p>${element.describe}</p>
							</div>
							<div class="buttons_product">
								<button class="card_button">
									<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M20.1713 11.1818L21.9768 3.46301C22.1072 2.9057 21.6712 2.375 21.083 2.375H6.08086L5.73077 0.712129C5.64354 0.297654 5.26816 0 4.83271 0H0.916667C0.410399 0 0 0.39874 0 0.890625V1.48438C0 1.97626 0.410399 2.375 0.916667 2.375H3.58581L6.26889 15.1197C5.627 15.4783 5.19445 16.1508 5.19445 16.9219C5.19445 18.0696 6.15206 19 7.33333 19C8.51461 19 9.47222 18.0696 9.47222 16.9219C9.47222 16.3402 9.22598 15.8147 8.82964 15.4375H16.837C16.4407 15.8147 16.1944 16.3402 16.1944 16.9219C16.1944 18.0696 17.1521 19 18.3333 19C19.5146 19 20.4722 18.0696 20.4722 16.9219C20.4722 16.0991 19.98 15.3881 19.2661 15.0514L19.4768 14.1505C19.6072 13.5932 19.1712 13.0625 18.5829 13.0625H8.33086L8.08088 11.875H19.2774C19.7054 11.875 20.0764 11.5873 20.1713 11.1818Z" fill="#F5F5F5"/>
									</svg>
										
									Add to card
								</button>

								<button class="buy_button">
									<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12.5714 6.25V5C12.5714 2.24297 10.5207 0 8 0C5.47929 0 3.42857 2.24297 3.42857 5V6.25H0V16.875C0 18.6009 1.27918 20 2.85714 20H13.1429C14.7208 20 16 18.6009 16 16.875V6.25H12.5714ZM5.71429 5C5.71429 3.62148 6.73964 2.5 8 2.5C9.26036 2.5 10.2857 3.62148 10.2857 5V6.25H5.71429V5ZM11.4286 9.6875C10.9552 9.6875 10.5714 9.26777 10.5714 8.75C10.5714 8.23223 10.9552 7.8125 11.4286 7.8125C11.902 7.8125 12.2857 8.23223 12.2857 8.75C12.2857 9.26777 11.902 9.6875 11.4286 9.6875ZM4.57143 9.6875C4.09804 9.6875 3.71429 9.26777 3.71429 8.75C3.71429 8.23223 4.09804 7.8125 4.57143 7.8125C5.04482 7.8125 5.42857 8.23223 5.42857 8.75C5.42857 9.26777 5.04482 9.6875 4.57143 9.6875Z" fill="#2D2F33"/>
									</svg>
								
									Buy now
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
            `
        
            $("#__cards").append(__CARD);
			
            $("#__modals").append(__MODALS);
        });
    });
}};

xhr.send()
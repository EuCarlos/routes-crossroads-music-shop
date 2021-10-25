const PRODUCTS = `
<h1 style="margin-top: 2rem;">CONTACT US</h1>
<main>
	<section class="cards">
		<div class="card">
			<div class="card-image">
				<img src="https://via.placeholder.com/400x300" />
			</div>
			<div class="card-text">
				<a href="#">Product #1</a>
				<p>Velit laboris aute culpa et voluptate dolor labore. Officia dolore aliqua laboris dolore.</p>
			</div>
			<div class="card-inner">
			<div>
				<p>$ 0.00</p>
			</div>
			</div>
		</div>
		<!-- AREA REMOVIVEL - INICIO  -->
		<div class="card">
			<div class="card-image">
				<img src="https://via.placeholder.com/400x300" />
			</div>
			<div class="card-text">
				<a href="#">Product #2</a>
				<p>Velit laboris aute culpa et voluptate dolor labore. Officia dolore aliqua laboris dolore.</p>
			</div>
			<div class="card-inner">
			<div>
				<p>$ 0.00</p>
			</div>
		</div>
	</div>
				
	<div class="card">
		<div class="card-image">
			<img src="https://via.placeholder.com/400x300" />
		</div>
		<div class="card-text">
			<a href="#">Product #3</a>
			<p>Velit laboris aute culpa et voluptate dolor labore. Officia dolore aliqua laboris dolore.</p>
		</div>
		<div class="card-inner">
			<div>
				<p>$ 0.00</p>
			</div>
		</div>
	</div>
  <!-- AREA REMOVIVEL - INICIO  -->
</section>

</main>

`

const contentProducts = document.getElementById('PRODUCTS')
contentProducts.innerHTML = PRODUCTS
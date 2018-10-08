import React from 'react';

const ApiProducts = [
	{ id: 1, name: 'The Lightning Thief', description: 'Now in paperback--the first novel of a new series that mixes classic Greek mythology with modern adventure...', price: 10 },
	{ id: 2, name: 'The Secret', description: 'Fragments of a Great Secret have been found in the oral traditions, in literature, in religions and philosophies...', price: 17 },
	{ id: 3, name: 'The-Hate-U-Give', description: "Inspired by the Black Lives Matter movement, Angie Thomas's searing debut about an ordinary girl...", price: 13 }
]

class cartApp extends React.Component {
	state = {
		products: ApiProducts,
		cart: []
	}

  addToCart = product => {
    const { cart } = this.state;

    const checkProduct = cart.some(cartProduct => {
      return cartProduct.id === product.id;
    });

    if (!checkProduct) {
      return this.setState({ cart: [...cart, { ...product, quantity: 1 }] });
    }

    const updateCart = cart.map(cartProduct => {
      cartProduct.id === product.id && cartProduct.quantity++;
      return cartProduct;
    });

    this.setState({ cart: updateCart });
  };

  removeToCart = product => {
    const { cart } = this.state;

    const newCart = cart.filter(cartProduct => {
      return cartProduct.id !== product.id;
    });

    this.setState({ cart: newCart });
  };
	
	render() {
		const { products, cart } = this.state
		return (
			<div className="app">
				<main className="main">
					<Products products={products} addToCart={this.addToCart}/>
				</main>
				<aside className="sidebar">
					{ cart.length > 0 
						? <div className="h2">Total: ${ cart.reduce((a,b) => a + b.price * b.quantity, 0) }</div>
						: <div className="h2">Cart is empty</div> }
					<Cart products={cart} removeToCart={this.removeToCart}/>
				</aside>
			</div>
		);
	}
}

const Cart = ({ products, removeToCart }) => (
	<div className="grid">
	
		{products.map(product => 
			<div className="card" key={product.id}>
				<div className="card-header">{ product.name }</div>
				<div className="card-body">
					<p>quantity: {product.quantity}</p>
					<p>price: ${product.price}</p>
				</div>
				<div className="card-footer">
					<button onClick={() => removeToCart(product)}>remove to cart</button>
				</div>
			</div>						 
		)}
		
	</div>
)

const Products = ({ products, addToCart }) => (
	<div className="grid-3">
	
		{products.map(product => 
			<div className="card" key={product.id}>
				<div className="card-header">{ product.name } - ${ product.price }</div>
				<div className="card-body">{ product.description }</div>
				<div className="card-footer">
					<button onClick={() => addToCart(product)}>add to cart</button>
				</div>
			</div>						 
		)}
		
	</div>
)
 
export default cartApp;
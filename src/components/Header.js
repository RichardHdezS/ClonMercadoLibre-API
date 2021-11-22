import React, { Component } from 'react';
import { ProductosConsumer } from '../context/ProductosContext';
import {Avatar} from "@material-ui/core";
class Header extends Component {
    state = { 
        nombre: ''
    }

    // si el usuario agrega un producto
    obtenerDatosProducto = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
   
    render() { 
        const Mercadolibreurl="https://www.mercadolibre.com.mx/";
        const img = <img src="https://i.ibb.co/yB7WhwC/logoo.jpg" alt="Mercado Libre"/>;
        const avatar="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59bbb29c5bafe878503c9872/husky-siberiano-bosque.jpg";
        return ( 
            <ProductosConsumer>
                {(value) => {
      
                    return( 

                        <nav className="uk-navbar-container uk-margin navBar">
                            <div className="uk-navbar-left navBar">

                                <a className="uk-navbar-item uk-logo" href={Mercadolibreurl}>{img}</a>

                                <ul className="uk-navbar-nav">
                                    <li>
                                        <a href={Mercadolibreurl}>
                                            <span className="uk-icon uk-margin-small-right" uk-icon="icon: location"></span>
                                            Envíar a Daniel Herrera
                                        </a>
                                    </li>
                                </ul>

                               

                                <div className="uk-navbar-item">
                                    <form
                                            onSubmit={e => {
                                                e.preventDefault();
                                                value.obtenerProductos(this.state)
                                            }}
                                        >      
                                    <input
                                            name="nombre"
                                            className="uk-input uk-form-width-large buscar"
                                            
                                            type="text"
                                            placeholder="Buscar productos, marcas y más.."
                                            onChange={this.obtenerDatosProducto}
                                        />
                                        <span className="uk-icon uk-margin-small-right" uk-icon="icon: search">
                                            <input type="submit" className="uk-button uk-button-default uk-icon" value="Buscar" />   
                                        </span>  
                          
                                    </form>
                                </div>
                                <span className="uk-icon uk-margin-large-left" uk-icon="icon: cart">Disfruta de tu beneficio de envío gratis</span>
                                <div>
                                
                                        <Avatar aria-label="Profile Picture" className="uk-margin-large-left">
                                            <img src={avatar} alt="" width="40px" height="40px" />
                                            
                                        </Avatar>
                                        <span className="uk-icon uk-margin-large-left" uk-icon="icon: users">Daniel Herrera</span>
                                </div>
                            </div>
                        </nav>

             
                )
            }}
            </ProductosConsumer>
         );
    }
}
 
export default Header;
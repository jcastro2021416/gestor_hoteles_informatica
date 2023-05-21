

export const Factura = () => {
  return (

    <>
    
        <div className="p-5">
                <div className="">
                </div>
                <div className="top-left">
                    <div className="graphic-path">
                        <p>Factura</p>
                    </div>
                    <div className="position-relative">
                        <p>Factura No. <span>XXXX</span></p>
                    </div>
                </div>

                <div className="col-10"> </div>
                    <div className="row bb pb-3">
                        <div className="col-7">
                            <p> Proveedor,</p>
                            <h2>Nombre de la persona</h2>
                            <b className="address"> Dirrecion, Factura  2351, vendedor</b>
                            <div className="txn mt-2">Nit XXXXXXX</div>
                        </div>
                        <div className="col-5">
                            <p>Cliente,</p>
                            <h2>  Jose</h2>
                           <b className="address"> Zona 1  Direcion </b> 
                            <div className="txn mt-2">NIt: XXXXXXX</div>
                        </div>
                    </div>
                    <div className="row extra-info pt-3">
                        <div className="col-7">
                            <p>Método de pago: : <span>Efectivo</span></p>
                            <p>Número de orden: <span>#868</span></p>
                        </div>
                        <div className="col-5">
                            <p>Fecha de entrega: <span>10-04.2021</span></p>
                        </div>
                    </div>
                </div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <td>Subtotal</td>
                            <td>Impuesto:	</td>
                            <td>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class NameName="media">
                            
                                    <div className="media-body">
                                        <p class="mt-0 title">Encabezado de medios</p>
                                    Recerva de un hotel 
                                    </div>
                                </div>
                            </td>
                            <td>Q 200</td>
                            <td>1</td>
                            <td>Q 200</td>
                        </tr>
                        <tr>
                            <td>
                                <div className ="media">
                                    <div className="media-body">
                                        <p className="mt-0 title">Encabezado de medios</p>
                                        Recerva de una cama para 2 personas 
                                    </div>
                                </div>
                            </td>
                            <td>Q 300</td>
                            <td>2</td>
                            <td> Q 600</td>
                        </tr>
                    </tbody>
                </table>

                <div className="row">
                    <div class="col-8">
                        <p className="m-0 font-weight-bold"> Note: </p>
                        <p>Se le Agradece por su Preferencia</p>
                    </div>
                    <div className="col-4">
                        <table className="table border-0 table-hover">
                            <tr>
                                <td>Sub Total:</td>
                                <td>800$</td>
                            </tr>
                            <tr>
                                <td>Impuesto:</td>
                                <td>15$</td>
                            </tr>
        
                            <tfoot>
                                <tr>
                                    <td>Total:</td>
                                    <td>825$</td>
                                </tr>
                            </tfoot>
                        </table>

                        <div className="col-12">
                            <p className="text-center m-0"> Director Signature </p>
                        </div>
                    </div>
                </div>

    
    
    </>
    )
    }

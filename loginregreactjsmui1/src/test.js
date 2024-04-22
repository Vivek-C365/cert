import React from 'react';

const TotalReceived = () => {
    return (
        <div className="box-right" style={{padding: '30px 25px', backgroundColor: 'white', borderRadius: '15px'}}>
            <div className="col-md-8 ps-0">
                <p className="ps-3 text-muted fw-bold h6 mb-0">TOTAL RECEIVED</p>
                <p className="h1 fw-bold d-flex">
                    <span className="fas fa-dollar-sign text-muted pe-1 h6 align-text-top mt-1"></span>
                    84,254<span className="text-muted">.58</span>
                </p>
                <p className="ms-3 px-2 bg-green" style={{backgroundColor: '#d4f8f2', color: '#06e67a', padding: '3px 0', display: 'inline', borderRadius: '25px', fontSize: '11px'}}>+10% since last month</p>
            </div>
            <div className="col-md-4">
                <p className="p-blue" style={{fontSize: '14px', color: '#1976d2'}}>
                    <span className="fas fa-circle pe-2"></span>Pending
                </p>
                <p className="fw-bold mb-3">
                    <span className="fas fa-dollar-sign pe-1"></span>1254<span className="text-muted">.50</span>
                </p>
                <p className="p-org" style={{fontSize: '14px', color: '#fbc02d'}}>
                    <span className="fas fa-circle pe-2"></span>On drafts
                </p>
                <p className="fw-bold">
                    <span className="fas fa-dollar-sign pe-1"></span>00<span className="text-muted">.00</span>
                </p>
            </div>
        </div>
    );
};

const QuickPayNote = () => {
    return (
        <div className="box-right" style={{padding: '30px 25px', backgroundColor: 'white', borderRadius: '15px'}}>
            <div className="d-flex pb-2">
                <p className="fw-bold h7">
                    <span className="text-muted">quickpay.to/</span>Publicnote
                </p>
                <p className="ms-auto p-blue">
                    <span className="bg btn btn-primary fas fa-pencil-alt me-3"></span>
                    <span className="bg btn btn-primary far fa-clone"></span>
                </p>
            </div>
            <div className="bg-blue p-2" style={{backgroundColor: '#dfe9fc9c', borderRadius: '5px'}}>
                <p className="h8 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum recusandae dolorem voluptas nemo, modi eos minus nesciunt.</p>
                <p className="p-blue bg btn btn-primary h8">LEARN MORE</p>
            </div>
        </div>
    );
};

const InvoiceDetails = () => {
    return (
        <div className="box-left" style={{padding: '20px 20px', backgroundColor: 'white', borderRadius: '15px'}}>
            <p className="text-muted h8">Invoice</p>
            <p className="fw-bold h7">Alex Parkinson</p>
            <p className="text-muted h8">3897 Hickroy St, salt Lake city</p>
            <p className="text-muted h8 mb-2">Utah, United States 84104</p>
            <div className="h8">
                <div className="row m-0 border mb-3">
                    <div className="col-6 h8 pe-0 ps-2">
                        <p className="text-muted py-2">Items</p>
                        <span className="d-block py-2 border-bottom">Legal Advising</span>
                        <span className="d-block py-2">Expert Consulting</span>
                    </div>
                    <div className="col-2 text-center p-0">
                        <p className="text-muted p-2">Qty</p>
                        <span className="d-block p-2 border-bottom">2</span>
                        <span className="d-block p-2">1</span>
                    </div>
                    <div className="col-2 p-0 text-center h8 border-end">
                        <p className="text-muted p-2">Price</p>
                        <span className="d-block border-bottom py-2"><span className="fas fa-dollar-sign"></span>500</span>
                        <span className="d-block py-2 "><span className="fas fa-dollar-sign"></span>400</span>
                    </div>
                    <div className="col-2 p-0 text-center">
                        <p className="text-muted p-2">Total</p>
                        <span className="d-block py-2 border-bottom"><span className="fas fa-dollar-sign"></span>1000</span>
                        <span className="d-block py-2"><span className="fas fa-dollar-sign"></span>400</span>
                    </div>
                </div>
                <div className="d-flex h7 mb-2">
                    <p>Total Amount</p>
                    <p className="ms-auto"><span className="fas fa-dollar-sign"></span>1400</p>
                </div>
            </div>
            <div className="">
                <p className="h7 fw-bold mb-1">Pay this Invoice</p>
                <p className="text-muted h8 mb-2">Make payment for this invoice by filling in the details</p>
                <div className="form">
                    <div className="row">
                        <div className="col-12">
                            <div className="card border-0">
                                <input className="form-control ps-5" type="text" placeholder="Card number" />
                                <span className="far fa-credit-card"></span>
                            </div>
                        </div>
                        <div className="col-6">
                            <input className="form-control my-3" type="text" placeholder="MM/YY" />
                        </div>
                        <div className="col-6">
                            <input className="form-control my-3" type="text" placeholder="cvv" />
                        </div>
                        <p className="p-blue h8 fw-bold mb-3">MORE PAYMENT METHODS</p>
                    </div>
                    <div className="btn btn-primary d-block h8">PAY <span className="fas fa-dollar-sign ms-2"></span>1400<span className="ms-3 fas fa-arrow-right"></span></div>
                </div>
            </div>
        </div>
    );
};

const YourComponent = () => {
    return (

        <div className="containers" style={{ backgroundColor: '#e8eaf6', padding: '35px'}}>
            <div className="row m-0">
                <div className="col-md-7 col-12">
                    <div className="row">
                        <div className="col-12 mb-4">
                            <TotalReceived />
                        </div>
                        <div className="col-12 px-0 mb-4">
                            <QuickPayNote />
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-12 ps-md-5 p-0">
                    <InvoiceDetails />
                </div>
            </div>
        </div>
    );
};

export default YourComponent;

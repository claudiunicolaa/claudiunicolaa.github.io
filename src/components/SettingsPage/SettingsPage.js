import React from 'react';
import Modal from 'react-responsive-modal';
import "./SettingsPage.css";

export default class SettingsPage extends React.Component {
    state = {
        showPrompt: false,
        open: true,
    }

    componentDidMount() {
        this.receiveEmailCheck.click();
    }

    toggleConfirmPrompt = () => {
        this.setState({
            showPrompt: !this.state.showPrompt
        }
        )
    };

    deleteAccount = () => {
        console.log("deleting account");
    }

    onClose = () => {
        this.setState({
            open: false
        })
    }

    render() {
        const { showPrompt } = this.state;
        return (
            <React.Fragment>
                <Modal open={true} onClose={this.onClose}>
                    <div className="main">
                        <div className="title">
                            <h2>Setarile mele</h2>
                        </div>

                        <div className="checkbox-container">
                            <div>Doresc sa primesc email-uri</div>
                            <div className="checkbox">
                                <label className="switch">
                                    <input ref={input => this.receiveEmailCheck = input} type="checkbox" />
                                    <span className="slider"></span>
                                </label>
                            </div>
                        </div>

                        {!showPrompt &&
                            <div className="delete button-container">
                                <button className="btn btn-danger" onClick={this.toggleConfirmPrompt}>STERGE ACEST CONT</button>
                            </div>
                        }
                        {showPrompt &&
                            <div className="delete">
                                <div>Esti pe cale sa stergi acest cont.
                                 Esti sigur de aceasta decizie?</div>
                                <div className="button-container">
                                    <button className="btn btn-danger" onClick={this.deleteAccount}>DA</button>
                                </div>
                            </div>}
                    </div>
                </Modal>


            </React.Fragment>
        )
    }
}
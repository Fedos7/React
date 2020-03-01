import React from 'react'
import { connect } from 'react-redux'
import {modalControllAction} from '../store/actions'
function Header({openModal}) {
    return (
        <div className="header">
            <button
            onClick={() => {openModal('open')}}
            className="add-button" >
                Add Todo
            </button>
        </div>
    )
}
function mapStateToProps (state) {
    return {
        modalState: state.modalState
    }
}
const mapDispatchToProps = {
    openModal: modalControllAction
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)

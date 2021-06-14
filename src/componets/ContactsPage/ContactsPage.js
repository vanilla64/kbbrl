import React from 'react'
import MainContent from "../MainContent/MainContent"

function ContactsPage({ title }) {
  return (
    <MainContent title={title}>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }} className="col s4 white-text grey darken-4">
        <span style={{ marginRight: '10px' }} className="card-title material-icons">
          <i className="material-icons">mail</i>
        </span>
        <p>kbberesklet@gmail.com</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }} className="col s4 white-text grey darken-4">
        <span style={{ marginRight: '10px' }} className="card-title material-icons">
          <i className="material-icons">phone</i>
        </span>
        <p>+7 (499) 714-68-94</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }} className="col s4 white-text grey darken-4">
        <span style={{ marginRight: '10px' }} className="card-title material-icons">
          <i className="material-icons">phone</i>
        </span>
        <p>+7 (977) 994-68-94</p>
      </div>

        {/*<div className="card col s4 grey darken-4">*/}
        {/*  <div className="card-content white-text">*/}
        {/*    <span className="card-title material-icons">*/}
        {/*      <i className="material-icons">mail</i>*/}
        {/*    </span>*/}
        {/*    <p>kbberesklet@gmail.com</p>*/}
        {/*  </div>*/}
        {/*</div>*/}

      {/*<div className="card col s4 grey darken-4">*/}
      {/*  <div className="card-content white-text">*/}
      {/*      <span className="card-title material-icons">*/}
      {/*        <i className="material-icons">phone</i>*/}
      {/*      </span>*/}
      {/*    <span>+7 (499) 714-68-94</span>*/}
      {/*    /!*<span>+7 (977) 994-68-94</span>*!/*/}
      {/*  </div>*/}
      {/*</div>*/}
      <h3 className="col s12 white-text">Как добраться?</h3>
      <iframe
        title="Как добраться?"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a82c91bcdcf53d82ebc1fe6519a93ac7afaffce7567697d77c530ef01cb8bac&amp;source=constructor"
        width="100%" height="400">
      </iframe>
    </MainContent>
  )
}

export default ContactsPage

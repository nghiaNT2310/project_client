import React, { Fragment, useEffect, useState } from "react";
import AccountItem from "./AccountItem";
function Accounts(props){
    return (
        <Fragment>
          
        <table >
          <thead>
            <tr>
              <td></td>
              <td style={{width: '45%'}}>Tài khoản</td>
              <td style={{width: '45%'}}>Quyền hạn</td>
              <td style={{width: '10%'}}>Action</td>
            </tr>
          </thead>
          <tbody>
            {props.accounts.map((a,index) => {
              return (
                <AccountItem
                  account={a}
                  key={index}
                  deleteAccount={props.deleteAccount}
                />
              );
            })}
          </tbody>
        </table>
        </Fragment>
      );
}

export default Accounts
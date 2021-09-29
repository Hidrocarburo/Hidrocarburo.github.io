function checkCashRegister(price, cash, cid) {

  if(price == ""){
    document.getElementById("cash_register_output").innerHTML = "Debes especificar un precio y monto"
    return false;
  }

  let change = cash - price;
  let cidCash = cid.reduce(getCidCash, 0);
  let changeArr = [];

  function getCidCash(total, pos){
    return total + pos[1];
  }

  cidCash = cidCash.toFixed(2);
  if (cidCash < change){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else if (cidCash == change){
    return {status: "CLOSED", change: cid}
  } else{

    let unitValue = 0;

    for(let i=cid.length-1; i>=0; i--){
      let cidChangeValue = 0;
      switch (i){
        case 8: unitValue = 100; break;
        case 7: unitValue = 20; break;
        case 6: unitValue = 10; break;
        case 5: unitValue = 5; break;
        case 4: unitValue = 1; break;
        case 3: unitValue = 0.25; break;
        case 2: unitValue = 0.1; break;
        case 1: unitValue = 0.05; break;
        case 0: unitValue = 0.01; break;
      }

      if (unitValue <= change){
         while(change >= unitValue){
           if((change - unitValue >= 0) && (cid[i][1] > 0)){
             change -= unitValue
             cid[i][1] -= unitValue;
             change = change.toFixed(2);
             cidChangeValue += unitValue;
           }else{
             break;
           }
         }
      }

      if (cidChangeValue > 0){
        let unitName = "";
        switch (i){
        case 8: unitName = "ONE HUNDRED"; break;
        case 7: unitName = "TWENTY"; break;
        case 6: unitName = "TEN"; break;
        case 5: unitName = "FIVE"; break;
        case 4: unitName = "ONE"; break;
        case 3: unitName = "QUARTER"; break;
        case 2: unitName = "DIME"; break;
        case 1: unitName = "NICKEL"; break;
        case 0: unitName = "PENNY"; break; 
      }
      changeArr.push([unitName, cidChangeValue])
      }
    }

    if ((changeArr.length==0) || (change != 0)){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }else{
      return {status: "OPEN", change: changeArr}
    }
  }
}

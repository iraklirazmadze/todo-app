const styles = {
    inputDiv : {
      display: 'flex',
      width: '87%',
      maxWidth: '540px',
      height: '48px',
      boxSizing: 'border-box',
      padding: '14px',
      border:0,
      backgroundColor: 'white',
      margin:'0 6.5%',
      borderBottom: '0.5px solid #E3E4F1',
      justifyContent: "space-between",
      alignItems: "center"

    },

  checkBox:{
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '12px',
    border: '1px solid lightgray',
    cursor: "pointer"
  },
  checkBoxChecked:{
    width: '21px',
    height: '21px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)',
    marginRight: '12px',
    
    cursor: "pointer"
  },
  liContent :{
    fontFamily: 'Josefin Sans',
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '12px',
  letterSpacing: '-0.1666666716337204px',
  textAlign: 'left',
  
  cursor: "pointer"
  },
  liContentChecked :{
    fontFamily: 'Josefin Sans',
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '12px',
  letterSpacing: '-0.1666666716337204px',
  textAlign: 'left',
  
  textDecoration: 'line-through',
  cursor: "pointer"
  },
  marked:{
    color:'#3A7CFD'
  },
  darkMode:{
    darkBody:{
      backgroundColor: "black"
    },
    darkUl:{
      backgroundColor: "#25273D"
    }
  }

}
  

  export default styles;
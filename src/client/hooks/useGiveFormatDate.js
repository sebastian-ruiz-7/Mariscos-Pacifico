//Function to give format when the date is rendering in the sales page
export const useGiveFormatDate = (date) => {
    let today=new Date().toLocaleDateString()
    today=today.split('/')
    let month=today[0]
    let day=today[1]
    if (month<10) {
       month=`0${month}` 
    }
    if (day<10) {
        day=`0${day}`
    }
    today[0]=day
    today[1]=month
    today=today.reverse()
    today=today.join('-')

    //I need insert the code from above because the database retuns the date with the format 'YYYY-MM-DD' and JS gives it in 'M/D/YYYY'
    
    console.log('today',today)
    console.log('date',date)

    //This if compares if the sale is from today. If it is, so the function 'formatDate' will display just the time of the sale
    if (today===date.substring(0,10)) {
        return date.substring(11,16) //Here is returning just the time
    }else{
        let fecha=date.substring(0,10)
        fecha=fecha.split('-').reverse().join('/')
        return `${date.substring(11,16)} ${fecha.substring(0,5)}`
    }
}

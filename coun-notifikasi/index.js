
const notifications=["New friend request!","your order has been placed for $5.000"];
showNotificationCount(notifications.length)

setTimeout(function(){
    addNotification("Ada yang Srebed");
},5000)

function addNotification(notification)
{
    notifications.push(notification);
    showNotificationCount(notifications.length);
}
function removeNotification(notification)
{
    notifications.shift();
    showNotificationCount(notifications.length);
}


function showNotificationCount(count){
    // document.title ="("+count+")" + document.title;
    // 
    const pattern = /^\(\d+\)/;
    if(count === 0 ||pattern.test(document.title))
    {
        document.title=document.title.replace(pattern,count === 0 ? "":"("+count+")");
    }else{
        document.title ="("+count+")" + document.title;
    }
}
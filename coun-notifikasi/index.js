
const notification=["New friend request!","your order has been placed for $5.000"]
function addNotification(notification)
{
    notification.push(notification);
    showNotificationCount(notification.length);
}
function removeNotification(notification)
{
    notification.sift(notification);
    showNotificationCount(notification.length);
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
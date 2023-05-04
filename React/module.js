
function logger(message,type = 'log')
{
    console[type](message)
};
//Dùng export để xuất biến, hàm,... ra khỏi module
//Mỗi file js chỉ có thể export 1 defalt
export default logger;
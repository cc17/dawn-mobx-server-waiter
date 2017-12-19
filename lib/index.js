var actionsList = [];
function serverWaiter(target,name,descriptor){
  actionsList.push({
    target:target,
    name:name
  });
};

function serverWaiterRender(){
  actionsList.forEach((item)=>{
    console.log(item.target.constructor.name);
  });
};
module.exports = {
  serverWaiter:serverWaiter,
  serverWaiterRender:serverWaiterRender
};
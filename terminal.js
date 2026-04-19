let consoleDiv=document.getElementById("console")
let input=document.getElementById("command")

let godModeCounter=0

function print(t){
consoleDiv.innerHTML+=t+"<br>"
consoleDiv.scrollTop=consoleDiv.scrollHeight
}

async function fetchNoReason(){
try{
let r=await fetch("https://naas.isalman.dev/no")
return await r.text()
}catch{
return "because production servers are sacred"
}
}

input.addEventListener("keydown",async function(e){

if(e.key!=="Enter")return

let cmd=input.value.trim()
print("> "+cmd)

if(/^sudo apt install/i.test(cmd)){

let pkg=cmd.replace(/^sudo apt install/i,"").trim()

if(!pkg){
print("E: specify package")
}else{
print("consulting anti-installation cluster...")
let reason=await fetchNoReason()
print("NO.")
print("Reason: "+reason)
}

}

else if(cmd==="help"){
print("commands: servers network deploy status power easter-eggs")
}

else if(cmd==="servers"){
print("14 servers detected")
}

else if(cmd.startsWith("deploy")){
print("allocating VM...")
print("attaching storage...")
print("configuring network...")
print("server deployed successfully")
}

else if(cmd==="rm -rf /"||cmd==="rm -rf --no-preserve-root /"){
print("nice try.")
}

else if(cmd==="sudo buy-more-servers"){
print("error: bank account empty")
}

else if(cmd==="bitcoin-mine"){
print("mining...")
print("wallet balance: $0.00000002")
}

else if(cmd==="start-skynet"){
print("initializing neural network...")
print("skynet awakening...")
print("humans doomed")
}

else if(cmd==="upgrade-hardware"){
print("contacting bank...")
print("ERROR: insufficient funds")
}

else if(cmd==="cloud-status"){
print("linode region: online")
print("docker cluster: stable")
print("synology nas: happy")
}

else if(cmd==="ping google.com"){
print("PING google.com")
print("reply from google.com")
print("latency: 1ms")
print("how did that happen?")
}

else if(cmd==="sudo shutdown now"){
print("permission denied")
}

else if(cmd==="whoami"){
print("you are: a homelabber")
print("diagnosis: hardware addiction")
}

else if(cmd==="power"){
print("cluster power draw")
print("6.7 kW")
print("electricity bill: terrifying")
}

else if(cmd==="terraform apply"){
print("plan:")
print("+ create 17 servers")
print("+ attach 600TB storage")
print("ERROR: <s>dumb bitch</s> mother does not approve")
}

else if(cmd==="sudo su"){
print("root access granted")
print("welcome phenix")
}

else if(cmd==="apt upgrade"||cmd==="sudo apt upgrade"){
print("Reading package lists...")
print("Building dependency tree...")
print("WARNING: upgrades may reduce stability")
}

else if(cmd==="download-more-ram"){

print("downloading RAM...")

let progress=0

let interval=setInterval(()=>{

progress+=10
print("progress: "+progress+"%")

if(progress>=100){
clearInterval(interval)
print("RAM installed successfully")
print("total RAM: 4096 TB")
}

},300)

}

else if(cmd==="summon-support"){
print("opening support ticket...")
print("Estimated response time: 6-8 business eternities")
}

else if(cmd==="god-deploy"){
print("deploying entire datacenter...")
print("allocating 9000 VMs...")
print("ERROR: power grid cannot handle this")
}

else if(cmd==="show-rack"){

print("Never Enough Datacenter Rack")

let rack=[
"[ U42 ] core-switch",
"[ U41 ] tp-link poe+++",
"[ U40 ] unifi gateway",
"[ U38 ] ubuntu-server-1",
"[ U37 ] ubuntu-server-2",
"[ U36 ] ubuntu-server-3",
"[ U34 ] synology-nas",
"[ U30 ] docker cluster",
"[ U20 ] 10gbe backbone",
"[ U10 ] ups battery"
]

rack.forEach(r=>print(r))

}

else if(cmd==="coffee-time"){

print("brewing coffee...")

let p=0

let i=setInterval(()=>{

p+=10
print("☕ "+p+"%")

if(p>=100){
clearInterval(i)
print("coffee ready. productivity +50%")
}

},300)

}

else if(cmd==="self-destruct"){

print("SELF DESTRUCT SEQUENCE")

let c=10

let i=setInterval(()=>{

print("T-minus "+c)
c--

if(c<0){
clearInterval(i)
print("💥 BOOM (just kidding)")
}

},500)

}

else if(cmd==="god-mode"){

godModeCounter++

if(godModeCounter>=2){

print("GOD MODE ACTIVATED")
print("+ infinite servers")
print("+ infinite RAM")
print("+ infinite storage")

document.body.style.background="black"
document.body.style.color="lime"

godModeCounter=0

}else{
print("type god-mode again to activate")
}

}

else{
print("command not found")
}

input.value=""

})



/* KONAMI CODE */

const konami=[
"ArrowUp","ArrowUp",
"ArrowDown","ArrowDown",
"ArrowLeft","ArrowRight",
"ArrowLeft","ArrowRight",
"b","a"
]

let konamiIndex=0

document.addEventListener("keydown",function(e){

if(e.key===konami[konamiIndex]){

konamiIndex++

if(konamiIndex===konami.length){

activateKonami()
konamiIndex=0

}

}else{
konamiIndex=0
}

})

function activateKonami(){

print("")
print("KONAMI CODE ACCEPTED")
print("UNLIMITED SERVERS UNLOCKED")
print("deploying 9000 nodes...")

document.body.style.transition="filter 1s"
document.body.style.filter="hue-rotate(90deg)"

setTimeout(()=>{
document.body.style.filter=""
},5000)

}
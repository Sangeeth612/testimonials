let testimonial_data=[
    
    {
        name:"Thalapathi",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3OPzPWYLcZrLUTS_CJRppLw7mNV3kDsYEoA&s",
        text_content:"Surya, a courageous man who gets raised in the slums, fights for the rights of the poor. However, he becomes friends with Deva."

    },
    {
        name:"Annamalai",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKWv4s7l0USv8JuGgC3lfUI_zzsmi_9RQYVqKZ_-LXyuRtg9Kt6XrkCZnjDJNpsX-aoJI&usqp=CAU",
        text_content:"Annamalai, a milkman, and Ashok, the son of rich businessman, are childhood friends. However Ashok's father disapproves of their friendship."

    },
    {
        name:"Padayappa",
        image:"https://m.media-amazon.com/images/S/pv-target-images/051e123ea3143af1c98eaf4504c27571e60d2028825ec99cfdad39d2d8d760cc.jpg",
        text_content:"Padayappa's family is humiliated by an uncle and forced to leave their home. After working hard, Padayappa restores his family's honour."

    },
]
let data=0
let name=document.querySelector(".container_name")
let image=document.querySelector(".container_img")
let text_content=document.querySelector(".container_content")

function testimonial(){
    let current=testimonial_data[data]
    name.innerHTML=current.name
    image.src=current.image
    text_content.innerHTML=current.text_content
    data++

    if(data===testimonial_data.length){
        data=0
    }
}

setInterval(()=>{
    testimonial()
},3000 );
testimonial()

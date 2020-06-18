let data = [
  {
    ministry: "Ministry of Petroleum",
    ministryHandle: "Abdulaz29562466",
    minister: "Alhaji Abdulazeez",
    ministerHandle: "Abdulaz29562466",
    amount: 10000000,
  },
  {
    ministry: "Ministry of Women Affairs",
    ministryHandle: "aisha@buha.ri",
    minister: "Aisha Buhari",
    ministerHandle: "aisha@buha.ri",
    amount: 50000000,
  },
  {
    ministry: "Ministry of Education",
    ministryHandle: "simeon979",
    minister: "Adegbola Simeon",
    ministerHandle: "simeon979",
    amount: 30000000,
  },
  {
    ministry: "Ministry of Internal Affairs",
    ministryHandle: "tongueblastingcoder",
    minister: "TongueBlasting Coder",
    ministerHandle: "tongueblastingcoder",
    amount: 40000000,
  },
];
const get_ministry_list = ()=>{
	$.ajax({
        data : {
        },
        type : 'GET',
        url : '', 
        header: 'Access-Control-Allow-Origin: *',
        error : function(){
           console.log('Server not responding')
        }
    })
    .done(function(data) {
      	add_ministry_list(data);
    });
}
const add_ministry_list = (data)=>{
	for (let item of data) {
		let amountInNaira = new Intl.NumberFormat("en-ng", {
	      style: "currency",
	      currency: "NGN",
	    }).format(item.amount);
		ministry_list = document.createElement('tr');
		ministry_list.className = 'ministry_list';
		ministry_list.innerHTML = `<td>${item.ministry}</td>
		    <td class="ministry_twitter_handle_link">${item.ministryHandle}</td>
		    <td>${item.minister}</td>
		    <td class="minister_twitter_handle_link">${item.ministerHandle}</td>
		    <td class="ministry_list_amount">${amountInNaira}</td>`;
		$('.ministry_list_table table').append(ministry_list);
	}
}
const create_link_to_twitter = (username) =>{
	window.open(`https://twitter.com/${username}`,"_blank");
}
const ministry_menu_button = () =>{
	if($('.ministry_list_navbar').css('height') == '0px'){
		$('.ministry_list_navbar').css('height', 'auto');
		$('.ministry_list_navbar').css('border-top', '1px solid white');
	}else{
		$('.ministry_list_navbar').css('height', '0px');
		$('.ministry_list_navbar').css('border-top', 'none');
	}
}
const search = ({ target: value }) => {
  let regexp = new RegExp(value.value.toLowerCase());
  let allMinistries = document.querySelectorAll("td:first-child");
  for (let ministry of allMinistries) {
    if (!regexp.test(ministry.textContent.toLowerCase())) {
      ministry.parentElement.classList.add("remove");
    } else {
      ministry.parentElement.classList.remove("remove");
    }
  }
};

$(document).on("click", ".ministry_twitter_handle_link", function(){
	username = $(this).html();
	create_link_to_twitter(username);
});
$(document).on("click", ".minister_twitter_handle_link", function(){
	username = $(this).html();
	create_link_to_twitter(username);
});
$(document).on("click", "#ministry_list_menu_icon", ministry_menu_button);
$(document).on("input", "#filter", search);
add_ministry_list(data);

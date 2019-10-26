function biodata(nama,umur)

{

	  var address = new String("Jl. Tanjung Sabar No 31, Rt3 Rw1, Padang, Sumatera Barat");
	  var hobbies = ["Badminton","Automotif","Ngoding"];
	  var is_married = false;
	  var list_school= [{"name":"Universitas Putra Indonesia"}];
	  var skills = [{"skill_name":"Microsoft Offices","level":"advanced"},{"skill_name":"Web Programming","level":"beginer"},{"skill_name":"SQL Database","level":"advance"}];
	  var interest_in_coding = true; 

  return '{"biodata":{"name":'+nama+',"age":'+umur+',"address":'+address+',"hobbies":'+JSON.stringify(hobbies)+',"is_married":'+is_married+',"list_school":'+JSON.stringify(list_school)+',"skills"'+JSON.stringify(skills)+',"interest_in_coding":'+interest_in_coding+'}}';
}

		console.log(biodata("Anggi Gusti Wiliam",25));
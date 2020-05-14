
project_set = [
  {
    project_name: 'name1',
    small_def: 'small def small def small def small def small def small def small def small def',
    abstract: 'small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def small def',
    ref_url: 'project1.html',
    authors: [ 'first_name', '2nd_name', '3nd_name'],
    details: [ 
    	'1 Some industry experts believe the term artificial intelligence is too closely linked to popular culture, and this has caused the general public to have improbable expectations about how AI will change the workplace and life in general. Some researchers and marketers hope the label augmented intelligence, which has a more neutral connotation, will help people understand that most implementations of AI will be weak and simply improve products and services. The concept of the technological singularity a future ruled by an artificial superintelligence that far surpasses the human brain\'s ability to understand it or how it is shaping our reality remains within the realm of science fiction.understand that most implementations of AI will be weak and simply improve products and services. The concept of the technological singularity  a future ruled by an artificial superintelligence that far surpasses the human brain\'s ability to understand it or how it is shaping our reality remains within the realm of science fiction.', 
    	'21 Some industry experts believe the term artificial intelligence is too closely linked to popular culture, and this has caused the general public to have improbable expectations about how AI will change the workplace and life in general. Some researchers and marketers hope the label augmented intelligence, which has a more neutral connotation, will help people understand that most implementations of AI will be weak and simply improve products and services. The concept of the technological singularity a future ruled by an artificial superintelligence that far surpasses the human brain\'s ability to understand it or how it is shaping our reality remains within the realm of science fiction.understand that most implementations of AI will be weak and simply improve products and services. The concept of the technological singularity  a future ruled by an artificial superintelligence that far surpasses the human brain\'s ability to understand it or how it is shaping our reality remains within the realm of science fiction.', 
    	'31 Some industry experts believe the term artificial intelligence is too closely linked to popular culture, and this has caused the general public to have improbable expectations about how AI will change the workplace and life in general. Some researchers and marketers hope the label augmented intelligence, which has a more neutral connotation, will help people understand that most implementations of AI will be weak and simply improve products and services. The concept of the technological singularity a future ruled by an artificial superintelligence that far surpasses the human brain\'s ability to understand it or how it is shaping our reality remains within the realm of science fiction.understand that most implementations of AI will be weak and simply improve products and services. The concept of the technological singularity  a future ruled by an artificial superintelligence that far surpasses the human brain\'s ability to understand it or how it is shaping our reality remains within the realm of science fiction.']
  },
  {
    project_name: 'name2',
    small_def: 'small def small def small def small def small def small def small def small def',
    abstract: 'wqw32322535 qdsd f small def small def small def small def small def small def small def small def small def small ds ds  fnfnng  gfnsdmall def small def small def small def small def small def small def small def small def small def small def small def small def small def',
    ref_url: 'project2.html',
    authors: [ '2first_name', '32nd_name', '53nd_name', '53n32d3_name'],
    details: [ 
    	'1 Some industry experts believe the term artificial intelligence is too closely linked to popular culture, and this has caused the general public to have improbable expectations about how AI will change the workplace and life in general. Some researchers and marketers hope the label augmented intelligence, which has a more neutral connotation, will help people understand that most implementations of AI will be weak and simply improve products and services. The concept of the technological singularity a future ruled by an artificial superintelligence that far surpasses the human brain\'s ability to understand it or how it is shaping our reality remains within the realm of science fiction.understand that most implementations of AI will be weak and simply improve products and services. The concept of the technological singularity  a future ruled by an artificial superintelligence that far surpasses the human brain\'s ability to understand it or how it is shaping our reality remains within the realm of science fiction.', 
    	'21 Some industry experts believe the term artificial intelligence is too closely linked to popular culture, and this has caused the general public to have improbable expectations about how AI will change the workplace and life in general. Some researchers and marketers hope the label augmented intelligence, which has a more neutral connotation, will help people understand that most implementations of AI will be weak and simply improve products and services. The concept of the technological singularity a future ruled by an artificial superintelligence that far surpasses the human brain\'s ability to understand it or how it is shaping our reality remains within the realm of science fiction.understand that most implementations of AI will be weak and simply improve products and services. The concept of the technological singularity  a future ruled by an artificial superintelligence that far surpasses the human brain\'s ability to understand it or how it is shaping our reality remains within the realm of science fiction.', 
    	'31 Some industry experts believe the term artificial intelligence is too closely linked to popular culture, and this has caused the general public to have improbable expectations about how AI will change the workplace and life in general. Some researchers and marketers hope the label augmented intelligence, which has a more neutral connotation, will help people understand that most implementations of AI will be weak and simply improve products and services. The concept of the technological singularity a future ruled by an artificial superintelligence that far surpasses the human brain\'s ability to understand it or how it is shaping our reality remains within the realm of science fiction.understand that most implementations of AI will be weak and simply improve products and services. The concept of the technological singularity  a future ruled by an artificial superintelligence that far surpasses the human brain\'s ability to understand it or how it is shaping our reality remains within the realm of science fiction.']      
  }  
];
for(var i=1; i<=project_set.length; i++){  
  $('.d-flex_project_list').append(
	'<div class="col-md-4 d-flex">'+
		'<div class="blog-entry justify-content-end">'+
		'<a class="block-20" style="background-image: url(\'img/project_' + i + '/main.jpg\');">'+
		'</a>'+
		'<div class="text pt-4">'+
			'<h3 class="heading mt-2"><a>' + project_set[i-1].project_name + '</a></h3>'+
			'<p>' + project_set[i-1].small_def + '</p>'+
			'<center>'+
			'<div class="meta mb-3">'+
				'<div>'+
					'<button type="button" class="btn btn-info btn-sm" style="margin-top:10px;">'+
						'<span class="time">'+
							'<a id="' + i + '" class="badge badge-info presentation_click">'+
								'<i id="' + i + '" class="fa fa-caret-square-o-left presentation_click" aria-hidden="true"></i> Presentaion'+
							'</a>'+
						'</span>'+
					'</button>'+
				'</div>'+
				'<div>'+
					'<button type="button" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#abstract_div" style="margin-top:10px;">'+
						'<span class="time">'+
							'<a id="' + i + '" class="badge badge-warning abstract_click">'+
								'<i id="' + i + '" class="fa fa-file-text abstract_click" aria-hidden="true"></i> Abstract</a>'+
						'</span>'+
					'</button>'+
				'</div>'+
				'<div>'+
					'<button type="button" class="btn btn-danger btn-sm" style="margin-top:10px;">'+
						'<span class="time">'+
							'<a id="' + i + '" class="badge badge-danger project_link_click" data-toggle="modal" data-target="#project_div">'+
								'<i id="' + i + '" class="fa fa-info-circle project_link_click" aria-hidden="true"></i> more</a>'+
						'</span>'+
					'</button>'	+				
				'</div>'+
			'</div>'+
			'<center>'+		
		'</div>'+
		'</div>'+
	'</div>'
    );
}

$('.abstract_click').click(function(){
  	$('.abstract_set_div').text(project_set[this.id-1].abstract);
  	$('.title_project').text(project_set[this.id-1].project_name);
});

$('.project_link_click').click(function(){
  	$('.title_project_more').text(project_set[this.id-1].project_name);
  	$('.project_more_link').attr('href', project_set[this.id-1].ref_url);

	$('.project_set_div_1').text(project_set[this.id-1].details[0]);
	$('.project_set_div_2').text(project_set[this.id-1].details[1]);
	$('.project_set_div_3').text(project_set[this.id-1].details[2]);

  	$('.project_set_div_img_1').attr('src', 'img/project_' + this.id + '/p1.jpg');
  	$('.project_set_div_img_2').attr('src', 'img/project_' + this.id + '/p2.jpg');
  	$('.project_set_div_img_3').attr('src', 'img/project_' + this.id + '/p3.jpg');
  	
  	authors_list = project_set[this.id-1].authors;

  	$('.authors_list_show').html("");

	for(var i=1; i<=authors_list.length; i++){  
	  $('.authors_list_show').append(
			'<button type="button" class="btn btn-dark btn-sm" style="margin: 10px;">'+
				'<span class="time">'+
					'<a class="badge badge-dark">'+
						'<i class="fa fa-user" aria-hidden="true"></i> ' + authors_list[i-1] + ''+
					'</a>'+
				'</span>'+
			'</button>'
	  	);
	}

});

$('.presentation_click').click(function(){
	div = '.image_first_slide_project_' + this.id;
	jQuery(function(){
	   jQuery(div).click();
	});
});

window.onload = function() {

    baguetteBox.run('.gallery_presentation', {
        animation: 'fadeIn',
        noScrollbars: true
    });

};
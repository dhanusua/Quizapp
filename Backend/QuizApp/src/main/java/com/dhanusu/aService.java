package com.dhanusu;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class aService {

	@Autowired
	 Repo repo;
	@Autowired
	res_repo Res_rep;
	@GetMapping("/")
	public List<ques> getQuestions() {
		List<ques> allQues = repo.findAll();
		
		return allQues ;
	}
	@PostMapping("/result")
	
	public Result resut(@RequestBody Result resu) {
		return Res_rep.save(resu);
		
		
	}
	@GetMapping("/score")
	public List<Result> score() {
		List<Result> data = Res_rep.findAll();
		return data;
	}

}

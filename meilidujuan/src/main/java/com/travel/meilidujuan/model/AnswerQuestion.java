package com.travel.meilidujuan.model;

/**
 * 问答描述
 * @author Luoshuhong
 * @Company 
 * 2015年8月22日
 *
 */
public class AnswerQuestion {
//	CREATE TABLE `tb_answer_question` (
//			  `id` int(11) NOT NULL,
//			  `question` varchar(200) NOT NULL COMMENT '问题',
//			  `answer` varchar(1024) NOT NULL COMMENT '答案',
//			  PRIMARY KEY  (`id`)
//			) ENGINE=MyISAM DEFAULT CHARSET=latin1;
	private int id;
	private String question;  //问题
	private String answer;    //答案
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
}	

import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/core/models/Quiz.model';
import { UserQuiz } from 'src/app/core/models/UserQuiz.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserQuizService } from 'src/app/core/services/user-quiz.service';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {

  userQuizId: string;
  userQuiz: UserQuiz;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userQuizSvc: UserQuizService,
  ) {}

  ngOnInit() {
    this.fetchQuiz();
  }

  async fetchQuiz() {
    this.userQuizId = this.route.snapshot.paramMap.get('id');
    this.userQuiz = await this.userQuizSvc.fetchUserQuizById(this.userQuizId);
    console.log(this.userQuiz)
  }

  async next() {
    const result = await this.userQuizSvc.submitForCorrection(this.userQuiz);
    console.log(result);
    this.router.navigate([`/quizzes/results/${this.userQuiz._id}`]);
  }

}

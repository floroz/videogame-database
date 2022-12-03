import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GameFacade } from 'src/app/services/game.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  games$ = this.gameFacade.games$;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gameFacade: GameFacade
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.gameFacade.updateSearch(param['gameName'] ?? '');
    });
  }

  openGameDetails(id: number) {}

  orderBy(ordering: string) {
    this.gameFacade.updateOrdering(ordering);
  }

  getFilters() {
    return this.gameFacade.getAllowedFilters();
  }
}

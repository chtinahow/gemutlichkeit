import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import { staticPlugin } from '@elysiajs/static';
import home from '../screens/home';
import event from '../screens/event';
import personAssociation from '../screens/person-association';
import person from '../screens/person';

const app = new Elysia()
	.use(staticPlugin())
	.use(html())
	.get('/', home)
	.get('/event', event)
	.get('/person-association', personAssociation)
	.get('/person', person)
	.listen(3000);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);

# adonis-nexmo

Nexmo provider for AdonisJS

## Install

```bash
adonis install adonis-nexmo
```

You need to add the provider to AdonisJS at `start/app.js`:

```javascript
const providers = [
   ...
   'adonis-nexmo/providers/Nexmo'
];
```

And in your `.env` file

```
NEXMO_KEY=
NEXMO_SECRET=
```

then you can simply call it from within controllers etc:

```javascript
const Nexmo = use('Nexmo');
`````


const { Client } = require('zerodayz.js');
const client = new Client();

const PLACES = ['sewer','air', 'attic', 'bed', 'bushes', 'bus', 'coat', 'couch', 'discord', 'dog', 'dresser', 'glovebox', 'dumpster', 'glovebox', 'grass', ' laundromat', 'mailbox', 'pantry', 'pocket', 'shoe', 'sink', 'tree', 'uber'];
const MEMES = 'frick'.split('');
const ID = '270904126974590976';

const id = process.env.id;
const token = process.env.token;
const prefix = process.env.prefix;

const random = (array = []) => {
  return array[Math.floor(Math.random() * array.length)];
};

client.on('ready', async () => {
  const channel = client.channels.fetch(id);

  if (!channel) {
    console.log('Invalid Channel ID');

    return setTimeout(process.exit, 2000);
  };

  channel.send(prefix + 'beg');
  channel.send(prefix + 'search');

  setTimeout(() => {
    channel.send(prefix + 'pm');
  }, 3000);
  
  setTimeout(() => {
    channel.send(prefix + 'daily');
  }, 43200000);
  
  setInterval(() => {
    channel.send(prefix + 'beg');
  }, 45000);

  setInterval(() => {
    setTimeout(() => { channel.send(prefix + 'pm'); }, 3000);
  }, 40000);

  setInterval(() => {
    channel.send(prefix + 'search');
  }, 60000);

  console.log('Autofarm started.');
});

client.on('message', async message => {
  if (!message.isMemberMentioned(client.user) || message.author.id !== ID || message.channel.id !== id) return;

  var sent = false;

  PLACES.forEach(place => {
    if (message.content.includes(place) && !sent) {
      message.channel.send(place);

      sent = true;
    };
  });

  if (message.content.includes('What type of meme do you want to post?')) {
    await message.channel.send(random(MEMES));
  };

  if (message.content.includes('**Laptop** is broken lmao')) {
    await message.channel.send(prefix + 'buy laptop');
  };
});

client.login(token);

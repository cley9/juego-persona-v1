var juego= new Phaser.Game(612,344,Phaser.CANVAS,'bloque_juego');
var fondoJuego;
var flappy;
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;
var persona;

var estadoPrincipal={
	preload:function () {
	
	juego.load.image('fondo','img/bg1.jpeg');
	juego.load.image('pajaro','img/pajaro1.png');
	juego.load.spritesheet('pajaros','img/pajaro.png',43,30);
	juego.load.spritesheet('personas','img/persona1.png',64,64);



	},

	create:function(){
		fondoJuego = juego.add.tileSprite(0,0,612,344,'fondo');
		//flappy = juego.add.sprite(100,100,'pajaros');
		//flappy.scale.setTo(1);
		//flappy.animations.add('vuelo',[0,1,2],10,true);

		persona = juego.add.sprite(juego.width/2,juego.height/2,'personas');
		persona.anchor.setTo(0.5);
		persona.animations.add('arriba',[0,1,2,3,4,5,6,7,8],10,true); //crea la caminata tomando las 9 imagenes
		persona.animations.add('izquierda',[9,10,11,12,13,14,15,16,17],10,true);
		persona.animations.add('abajo',[18,19,20,21,22,23,24,25,26],10,true);
		persona.animations.add('derecha',[27,28,29,30,31,32,33,34,35],10,true);

		teclaDerecha=juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		teclaIzquierda=juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		teclaArriba=juego.input.keyboard.addKey(Phaser.Keyboard.UP);
		teclaAbajo=juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);
		juego.physics.startSystem(Phaser.Physics.ARCADE); //iniciaiza la gravedad y colisiones
		juego.physics.arcade.enable(persona); //habilita las fisicas tipo arcade
		persona.body.collideWorldBounds=true; //evita salir del limite de la pantalla
	},

	update:function(){
		fondoJuego.tilePosition.x-=1;
		//flappy.animations.play('vuelo');
		if(teclaDerecha.isDown){
			//flappy.x++;
			persona.position.x+=2;
			persona.animations.play('derecha');
		}else if(teclaIzquierda.isDown){
			//flappy.x--;
			persona.position.x-=2;
			persona.animations.play('izquierda');
		}else if(teclaArriba.isDown){
			//flappy.y--;
			persona.position.y-=2;
			persona.animations.play('arriba');
		}else if(teclaAbajo.isDown){
			//flappy.y++;
			persona.position.y+=2;
			persona.animations.play('abajo');
		}
	}

};

juego.state.add('principal',estadoPrincipal);
juego.state.start('principal');


import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {LessonData} from '../lesson-data';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.scss'],
})
export class LessonsPage implements OnInit {
  private id: any;
  private nextId: any = 0;
  private title:any;
  private icon:any;
  private sub;
  public holder:any;

  details:any=[];
  lessonData : LessonData = {title:"",note:"",image:"",content:"",content_title:"" ,nextId:"",image2:'',imagerevision1:'',imagerevision2:'',imagerevision3:'',imagerevision4:'',imagerevision5:'',imagerevision6:'',imagerevision7:'',imagerevision8:''}

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController) { 

    this.sub = this.activatedRoute.params.subscribe(params =>{
      this.id = 0;
  
      this.id = params['note'];
      this.title = params['title'];
      this.icon = params['icon'];

      this.createLessons(this.id,this.nextId);
    })

     
  }
  increment(id){
    this.nextId = this.nextId + 1;
    if(this.nextId > 5){
      this.nextId = 6;
    }
    console.log(id,this.nextId);
    this.createLessons(id, this.nextId);
  }
  decrement(id,nextId){
    this.nextId = this.nextId - 1;
    console.log(id,this.nextId);
    this.createLessons(id, this.nextId);
  }

  refreshOptionalData(){
    this.lessonData.imagerevision1 = '';
    this.lessonData.imagerevision2 = '';
    this.lessonData.imagerevision3 = '';
    this.lessonData.imagerevision4 = '';
    this.lessonData.imagerevision5 = '';
    this.lessonData.imagerevision6 = '';
    this.lessonData.imagerevision7 = '';
    this.lessonData.imagerevision8 = '';
    this.lessonData.image2 = '';
  }

  lesson1()
  {
    
  }

  createLessons(id,nextId)
  {
    console.log(id,this.nextId);

    this.refreshOptionalData();

    if(id == 1 && nextId == 0)
    {
      this.lessonData.nextId = nextId;
      this.lessonData.title= 'Welcome. Let us learn English together';
      this.lessonData.note = 'How are you???';
      this.lessonData.image = '../../assets/images/main_image1.png';
      this.lessonData.content_title = 'In this first section we are going to learn about CLASSROOM and GREETINGS Click the button that says "Continue" below we start.';
      this.lessonData.content = '';
    }

    if(id == 1 && nextId == 1)
    {
      this.lessonData.nextId = nextId;
      this.lessonData.title= 'Greetings';
      this.lessonData.note = 'Good morning?..How are you?..Fine, thank you';
      this.lessonData.image = '../../assets/images/teacher.jpeg';
      this.lessonData.content_title = 'Teacher Asha’s class';
      this.lessonData.content = 'This is Teacher Asha’s class. Teacher Asha says,“Good morning, class.” All the boys and girls say,“Good morning, Teacher.” Teacher Asha says,“How are you?” The class says, “Fine, thank you,Teacher.” Teacher Asha reads a story. The boys andgirls listen.';
    }
    if(id == 1 && nextId == 2)
    {
      this.lessonData.nextId = nextId;
      this.lessonData.title= 'Greetings';
      this.lessonData.note = 'Morning, Afternoon, Evening, Goodbye';
      this.lessonData.image = '../../assets/images/tomhome.jpg';
      this.lessonData.content_title = 'Tom Goes Home';
      this.lessonData.content = 'Tom is outside his class. He has his school bag. He wants to go home. His teacher says, “Good afternoon, Tom.” Tom says, “Good afternoon, Teacher  Asha.” Teacher Asha says, “How will you go home, Tom?” Tom says, “My sister will take me home today. She is here now. Good-bye, Teacher Asha.” Teacher Asha says, “Good-bye    Tom.”';
    }
    if(id == 1 && nextId == 3)
    {
      this.lessonData.nextId = nextId;
      this.lessonData.title= 'Greetings';
      this.lessonData.note = 'Sit Down, Stand Up, Turn Around';
      this.lessonData.image = '../../assets/images/class.jpg';
      this.lessonData.content_title = 'Sit down, stand up, turn around';
      this.lessonData.content = 'I am Mary. I am Tom. I am the teacher. We all stand up. We all sit down. Tom, stand up. Tom, turn around. Tom, sit down. Mary, stand up. Mary, turn around. Mary, sit down. Tom and Mary, stand up. Tom and Mary, turn around. Tom and Mary, sit  down. We all stand up. We all turn around. We all  sit down.';
    
    }
    if(id == 1 && nextId == 4)
    {
      this.lessonData.nextId = nextId;
      this.lessonData.title= 'Classroom';
      this.lessonData.note = 'book, door, window, pensils';
      this.lessonData.image2 = '../../assets/images/school.webp';
      this.lessonData.image = '../../assets/images/classroom_day4b.png';
      this.lessonData.content_title = 'In my classroom';
      this.lessonData.content = 'In my classroom there is a teacher. In my classroom,there is a teacher and a chair. In my classroom,  there is a chair and a door. In my classroom, there is a door and a blackboard. In my classroom, there is a blackboard and there are windows. In my classroom, there are windows and pencils. In my classroom,there are pencils and books. In my classroom, there is...me!';
    }

    
    if(id == 1 && nextId == 5)
    {
      this.lessonData.title= 'Revision';
      this.lessonData.note = 'Find the following in the images below 1.Door, 2. Window, 3. Teacher, 4.BlackBoard, 5. Classroom 6. Chair';
      this.lessonData.image2 = '';
      this.lessonData.image = '';
      this.lessonData.imagerevision1 = '../../assets/images/door.jpg';
      this.lessonData.imagerevision2 = '../../assets/images/window.jpg';
      this.lessonData.imagerevision3 = '../../assets/images/teacher.jpg';
      this.lessonData.imagerevision4 = '../../assets/images/blackboard.png';
      this.lessonData.imagerevision5 = '../../assets/images/class.jpeg';
      this.lessonData.imagerevision6 = '../../assets/images/chair.png';
      this.lessonData.content_title = '';
      this.lessonData.content = '';
      }else if(id == 1 && nextId > 5)
      {
        this.presentAlertConfirm('You have finished lesson 1.<br> <strong>Do you wish to go to the next lesson -- LESSON 2?</strong>!!!',1)
      }
    if(id==2 && nextId == 0)
    {
      this.lessonData.nextId = nextId;
      this.lessonData.title= 'Our Body';
      this.lessonData.note = 'Our body is very important. You need to take care of it';
      this.lessonData.image = '../../assets/images/ourbody.jpeg';
      this.lessonData.content_title = 'Key Words';
      this.details = {1:'stop',2:'stop',3:'hop',4:'point'};
      this.lessonData.content = 'Boy, Girl, Leg, Nose, Ear, Run, Touch, Point, Skip, Eye';
    }

    if(id==2 && nextId == 1)
    {
      this.lessonData.nextId = nextId;
      this.lessonData.title= 'Our Body';
      this.lessonData.note = '1. Boy 2. Girl 3. Nose 4.Touch 5.Point 6.Run';
      this.lessonData.image = '../../assets/images/boygirl.jpeg';
      this.lessonData.content_title = 'Tom and Mary Study';
      this.details = {1:'stop',2:'stop',3:'hop',4:'point'};
      this.lessonData.content = 'Here is Tom. Tom is a boy. Here is Mary. Mary is a girl. Tom and Mary like to study and learn with their friends. Mary says, “Tom, hop to the door. Tom, run back. Tom, stop.” Tom says, “Mary, skip to the window. Mary, walk back. Mary, stop. Touch your ear. Point to your eye. Point to your leg. Touch your eye.” Tom and Mary, sit down.';
    }
    if(id==2 && nextId == 2)
    {
      this.lessonData.nextId = nextId;
      this.lessonData.title= 'Our Body';
      this.lessonData.note = '1. Feet 2. Tongue 3. Hair 4.Head';
      this.lessonData.image2 = '../../assets/images/dogimage1.png';
      this.lessonData.image = '../../assets/images/dogimage2.jpeg';
      this.lessonData.content_title = 'Who am I?';
      this.details = {1:'stop',2:'stop',3:'hop',4:'point'};
      this.lessonData.content = 'My legs are long. My paws which are like feet are short. My ears are big. My eyes are small. My tongue is very long. Who am I? I am not a girl.Who am I? I am not a boy.   Who am I?I am a dog!';
    }
    if(id==2 && nextId == 3)
    {
      this.lessonData.nextId = nextId;
      this.lessonData.title= 'Our Body';
      this.lessonData.note = '1. hands 2. Raise 3. Toes 4.Doctor 5. my yours his hers';
      this.lessonData.image = '../../assets/images/childdoctor.jpeg';
      this.lessonData.content_title = 'A visit to the doctor';
      this.details = {1:'stop',2:'stop',3:'hop',4:'point'};
      this.lessonData.content = 'Today I go to the doctor. The doctor says, “Good morning, Tom.” I say, “Good morning, Doctor Kioko.” The doctor says, “How are you?” I say, “I am fine, thank you.” The doctor says,“Raise your hand, Tom.” I raise my hand. The doctor says, “Raise your leg,  Tom.” I raise my leg. The doctor says: “Where are   your toes, Tom?” I point to my toes. The doctor is happy. I am fine. The doctor says, “Close your eyes, Tom.” I close my eyes. The doctor says, “Open your  mouth, Tom.” I open my mouth. The doctor puts a   sweet in my mouth. I go to school very happy!';
    }

    if(id==2 && nextId == 4)
    {
      this.lessonData.nextId = nextId;
      this.lessonData.title= 'Our Body';
      this.lessonData.note = '1. Fingers 2. Teeth 3. Cat 4.Goat 5. Sheep 6. Dog';
      this.lessonData.image = '../../assets/images/animals.png';
      this.lessonData.content_title = 'My animals';
      this.details = {1:'stop',2:'stop',3:'hop',4:'point'};
      this.lessonData.content = 'The cat has eyes. Where are your eyes? The dog has teeth. Where are your teeth? The goat has ears.  Where are your ears? The sheep has a nose. Where is your nose? The duck has feet. Where are your   feet? These are my feet. They took me to class today  Where are your feet? They will take you home today';
    }
    if(id==2 && nextId == 5)
    {
      this.lessonData.nextId = nextId;
      this.lessonData.title= 'Our Body';
      this.lessonData.note = 'The end';
      this.lessonData.image = '';
      this.lessonData.content_title = 'Summary';
      this.details = {1:'stop',2:'stop',3:'hop',4:'point'};
      this.lessonData.content = 'Animals and their body parts, our body parts which include: eyes, ears, nose, hands, legs';
    }else if(id == 2 && nextId > 5)
    {
      this.presentAlertConfirm('You have finished lesson 2.<br> <strong>Do you wish to go to the next lesson -- LESSON 3?</strong>!!!',2)
    }
    if(id==3 && nextId == 0)
    {
      this.lessonData.nextId = nextId;
      this.lessonData.title= 'Numbers';
      this.lessonData.note = 'In this section we are going to learn how to count numbers from 1 to 10';
      this.lessonData.image = '../../assets/images/numbers.png';
      this.lessonData.content_title = 'Introduction';
      this.lessonData.content = 'This numbers include 1 2 3 4 5 6 7 8 9 10';
    }

    if(id==3 && nextId == 1)
    {
      this.lessonData.nextId = nextId;
      this.lessonData.title= 'Numbers';
      this.lessonData.note = 'How many?';
      this.lessonData.image2 = '../../assets/images/numbers2.png';
      this.lessonData.image = '../../assets/images/teacherstudent.png';
      this.lessonData.content_title = 'I have, you have';
      this.details = {1:'stop',2:'stop',3:'hop',4:'point'};
      this.lessonData.content = 'I have one book. You have two books, teacher. I have three pencils. You have four pencils, teacher. I have five stones. You have six stones, teacher. I hav   seven sticks. You have eight sticks, teacher. I have    nine desks. You have ten desks, teacher. I have one    ball. You have none, teacher. Do you want to play with my ball?';
    }

    if(id==3 && nextId == 2)
    {
      this.lessonData.nextId = nextId;
      this.lessonData.title= 'Numbers';
      this.lessonData.note = 'Add Count';
      this.lessonData.image = '../../assets/images/boygirl.jpeg';
      this.lessonData.content_title = 'Tom and Mat add numbers';
      this.details = {1:'stop',2:'stop',3:'hop',4:'point'};
      this.lessonData.content = 'Tom is at school. Mat is at school. They add   numbers. Mat says, “Two and three is ...? How many   fingers are they, Tom?” Tom counts his fingers. He  shows Mat two fingers and then adds three more  fingers. “How many fingers do you see, Mat?” Tom   asks. Mat counts, “One, two, three, four, five. I see  five fingers,” he says. Tom says to Mat, “Add four   and five fingers, Mat.” Mat counts his fingers. He  shows Tom four fingers and five fingers. “How many    fingers do you see, Tom?” he asks. Tom counts.   “One, two, three, four, five, six, seven, eight, nine.   I see nine fingers,” he says. Mat asks you to add two   and six fingers. How many are they?';
    }

    if(id==3 && nextId == 3)
    {
      this.lessonData.nextId = nextId;
      this.lessonData.title= 'Numbers';
      this.lessonData.note = 'Slow Fast Less More';
      this.lessonData.image = '../../assets/images/dogcat.jpeg';
      this.lessonData.content_title = 'The dog and the cat';
      this.details = {1:'stop',2:'stop',3:'hop',4:'point'};
      this.lessonData.content = 'Tom has a dog. It has one head, two ears, and four legs. The dog has more legs than Tom. Pat has a cat.  Pat’s cat also has one head, two ears, and four legs.   Pat has less legs than her cat. Tom’s dog sees the   cat. It wants to play with the cat. The cat sees the   dog and runs fast. Tom’s dog runs after the cat. It falls in the mud. The mud makes the dog run slowly.   It cannot catch the cat. The dog is slow.';
    }

    if(id==3 && nextId == 4)
    {
      this.lessonData.nextId = nextId;
      this.lessonData.title= 'Numbers';
      this.lessonData.note = 'Slow Fast Less More';
      this.lessonData.image = '../../assets/images/pencils.png';
      this.lessonData.content_title = 'Pencils';
      this.details = {1:'stop',2:'stop',3:'hop',4:'point'};
      this.lessonData.content = 'The children are counting pencils. Tom has two pencils. They are yellow. Pat has one pencil and  it is black. Jim has nine pencils. Two are red, three  are blue and four are green. Tom and Pat are sad.  Jim asks, “Why are you so sad?” Tom and Pat say,  “You have more pencils than us.” Jim says “Do not be sad.” Jim gives two blue pencils to Tom and three   green pencils to Pat. Now all the children have four  pencils each.';
    }
    if(id == 3 && nextId == 5)
    {
      this.lessonData.nextId = nextId;
      this.lessonData.title= 'Revision Numbers';
      this.lessonData.note = '';
      this.lessonData.image2 = '';
      this.lessonData.imagerevision1 = '../../assets/images/ducks.png';
      this.lessonData.imagerevision2 = '../../assets/images/balls.png';
      this.lessonData.imagerevision3 = '../../assets/images/fish.png';
      this.lessonData.content_title = 'The End';
      this.lessonData.content = '';
    }else if(id == 3 && nextId > 5)
    {
      this.presentAlertConfirm('You have finished lesson 3.<br> <strong>Do you wish to go to the next lesson -- LESSON 4?</strong>!!!',3)
    }

      if(id==4 && nextId == 0)
      {
        this.lessonData.nextId = nextId;
        this.lessonData.title= 'Shopping';
        this.lessonData.note = 'Have you ever gone for shopping? ';
        this.lessonData.image = '../../assets/images/shopping.jpeg';
        this.lessonData.content_title = 'Introduction';
        this.lessonData.content = 'We are going to lear about the market, Food, Bread and many more. Click continue button to start the lesson';
      }
  
      if(id==4 && nextId == 1)
      {
        this.lessonData.nextId = nextId;
        this.lessonData.title= 'Shopping';
        this.lessonData.note = 'market jam bread stew tomatoes onions  food   potatoes    money buy';
        this.lessonData.image = '../../assets/images/market.jpg';
        this.lessonData.content_title = 'Going to the market';
        this.details = {1:'stop',2:'stop',3:'hop',4:'point'};
        this.lessonData.content = 'Mother wants to make stew. Mother and I go to the  market to buy food for the stew. At the market there   are many different kinds of food. I want to buy jam   and bread but Mother says we can only buy what we   need for stew. We buy three tomatoes and four small   onions. We buy three big potatoes. Mother also wants to buy some meat for the stew. I put everything in   a bag and Mother counts the money. When we are   done, Mother says, “Let us go home and cook.”';
      }
  
      if(id==4 && nextId == 2)
      {
        this.lessonData.nextId = nextId;
        this.lessonData.title= 'Shopping';
        this.lessonData.note = 'Fish Rice Milk Cake';
        this.lessonData.image = '../../assets/images/selling.jpeg';
        this.lessonData.content_title = 'Selling at the market';
        this.lessonData.content = 'Pat and her father are going to the market. They have many things to sell there. They will take three bags of rice, ten fish, and six hens to sell. When they sell the food they will get money from the people who buy it. On the way to the market, Pat sees a man selling jam and cakes. Her father says if she sells all  the bags of rice, she can have one cake. Pat works  very hard. She sells all the fish, but she only sells   two bags of rice. She is sad. Father says, “I have   something for you.” He brought Pat a cake because  she worked very hard and sold all the fish. Pat is very';
       }
  
      if(id==4 && nextId == 3)
      {
        this.lessonData.nextId = nextId;
        this.lessonData.title= 'Shopping';
        this.lessonData.note = 'Mango Shopkeeper Store Hungry';
        this.lessonData.image = '../../assets/images/frog.png';
        this.lessonData.content_title = 'Mrs. Frog goes shopping';
        this.lessonData.content = 'Mrs. Frog is hungry but she has no food. She will  go shopping. Mrs. Frog sees mangoes and flies to  buy. She puts them in her bag. The shopkeeper   asks for her money but Mrs. Frog has no money.  What will she do? How will she have dinner? “I can   help,” said Mr. Pig. “I have some money.” Mrs.     Frog is very happy. She goes home and eats her    mango and flies. “Yum!” said Mrs. Frog. “What  good friend Mr. Pig is.”';
      }
  
      if(id==4 && nextId == 4)
      {
        this.lessonData.nextId = nextId;
        this.lessonData.title= 'Shopping';
        this.lessonData.note = 'Pot Peel Bowl Chop Hot';
        this.lessonData.image = '../../assets/images/makingstew.jpeg';
        this.lessonData.content_title = 'Making Stew';
        this.lessonData.content = 'Mother is home from the store. “It is time to  make the stew,” says Mother. “I have brought the   tomatoes, onions, potatoes, and meat from the store. Pat, you chop the onions. Tom, you peel the  potatoes. Mary, you chop the tomatoes. I will cut  the meat.” Everyone is happy to help. Mother says   “Mary, put the tomatoes in the pot. Tom, put the    potatoes in the pot. Pat, put the onions in the pot. I will put the meat in the pot.” The pot is very hot. The stew cooks slowly. The children are hungry. When    the stew is ready, Mother puts the stew in the bowls    and everyone eats.';
      }
      if(id == 4 && nextId == 5)
      {
        this.lessonData.nextId = nextId;
        this.lessonData.title= 'Summary of Shopping';
        this.lessonData.note = '';
        this.lessonData.image= '';
        this.lessonData.content_title = 'Thank you for reading this section to the end. We have learnt how to do shopping and various terms like shopkeeper, onions, bread, food, stew and many more. You can click the button below named "Back" to read again this section';
        this.lessonData.content = '';
        }

        if(id==4 && nextId == 0)
        {
          this.lessonData.nextId = nextId;
          this.lessonData.title= 'Shopping';
          this.lessonData.note = 'Have you ever gone for shopping? ';
          this.lessonData.image = '../../assets/images/shopping.jpeg';
          this.lessonData.content_title = 'Introduction';
          this.lessonData.content = 'We are going to lear about the market, Food, Bread and many more. Click continue button to start the lesson';
        }
    
        if(id==4 && nextId == 1)
        {
          this.lessonData.nextId = nextId;
          this.lessonData.title= 'Shopping';
          this.lessonData.note = 'market jam bread stew tomatoes onions  food   potatoes    money buy';
          this.lessonData.image = '../../assets/images/market.jpg';
          this.lessonData.content_title = 'Going to the market';
          this.details = {1:'stop',2:'stop',3:'hop',4:'point'};
          this.lessonData.content = 'Mother wants to make stew. Mother and I go to the  market to buy food for the stew. At the market there   are many different kinds of food. I want to buy jam   and bread but Mother says we can only buy what we   need for stew. We buy three tomatoes and four small   onions. We buy three big potatoes. Mother also wants to buy some meat for the stew. I put everything in   a bag and Mother counts the money. When we are   done, Mother says, “Let us go home and cook.”';
        }
    
        if(id==4 && nextId == 2)
        {
          this.lessonData.nextId = nextId;
          this.lessonData.title= 'Shopping';
          this.lessonData.note = 'Fish Rice Milk Cake';
          this.lessonData.image = '../../assets/images/selling.jpeg';
          this.lessonData.content_title = 'Selling at the market';
          this.lessonData.content = 'Pat and her father are going to the market. They have many things to sell there. They will take three bags of rice, ten fish, and six hens to sell. When they sell the food they will get money from the people who buy it. On the way to the market, Pat sees a man selling jam and cakes. Her father says if she sells all  the bags of rice, she can have one cake. Pat works  very hard. She sells all the fish, but she only sells   two bags of rice. She is sad. Father says, “I have   something for you.” He brought Pat a cake because  she worked very hard and sold all the fish. Pat is very';
         }
    
        if(id==4 && nextId == 3)
        {
          this.lessonData.nextId = nextId;
          this.lessonData.title= 'Shopping';
          this.lessonData.note = 'Mango Shopkeeper Store Hungry';
          this.lessonData.image = '../../assets/images/frog.png';
          this.lessonData.content_title = 'Mrs. Frog goes shopping';
          this.lessonData.content = 'Mrs. Frog is hungry but she has no food. She will  go shopping. Mrs. Frog sees mangoes and flies to  buy. She puts them in her bag. The shopkeeper   asks for her money but Mrs. Frog has no money.  What will she do? How will she have dinner? “I can   help,” said Mr. Pig. “I have some money.” Mrs.     Frog is very happy. She goes home and eats her    mango and flies. “Yum!” said Mrs. Frog. “What  good friend Mr. Pig is.”';
        }
    
        if(id==4 && nextId == 4)
        {
          this.lessonData.nextId = nextId;
          this.lessonData.title= 'Shopping';
          this.lessonData.note = 'Pot Peel Bowl Chop Hot';
          this.lessonData.image = '../../assets/images/makingstew.jpeg';
          this.lessonData.content_title = 'Making Stew';
          this.lessonData.content = 'Mother is home from the store. “It is time to  make the stew,” says Mother. “I have brought the   tomatoes, onions, potatoes, and meat from the store. Pat, you chop the onions. Tom, you peel the  potatoes. Mary, you chop the tomatoes. I will cut  the meat.” Everyone is happy to help. Mother says   “Mary, put the tomatoes in the pot. Tom, put the    potatoes in the pot. Pat, put the onions in the pot. I will put the meat in the pot.” The pot is very hot. The stew cooks slowly. The children are hungry. When    the stew is ready, Mother puts the stew in the bowls    and everyone eats.';
        }
        if(id == 4 && nextId == 5)
        {
          this.lessonData.nextId = nextId;
          this.lessonData.title= 'Summary of Shopping';
          this.lessonData.note = '';
          this.lessonData.image= '';
          this.lessonData.content_title = 'Thank you for reading this section to the end. We have learnt how to do shopping and various terms like shopkeeper, onions, bread, food, stew and many more. You can click the button below named "Back" to read again this section';
          this.lessonData.content = '';
          }
          else if(id == 4 && nextId > 5)
          {
            this.presentAlertConfirm('You have finished lesson 4.<br> <strong>Do you wish to go to LESSON 5?</strong>!!!',4)
          }

          if(id==5 && nextId == 0)
          {
            this.lessonData.nextId = nextId;
            this.lessonData.title= 'Short Stories';
            this.lessonData.note = '';
            this.lessonData.image = '../../assets/images/story.jpeg';
            this.lessonData.content_title = 'To help you learn English more easily, we are going to read some short stories. Are you excited about stories? I am very excited that we are going to read with you this stories. Click the button named "Continue" to start reading the first story.';
            this.lessonData.content = '';
          }
      
          if(id==5 && nextId == 2)
          {
            this.lessonData.nextId = nextId;
            this.lessonData.title= 'The monkeys steal food';
            this.lessonData.note = '';
            this.lessonData.image = '../../assets/images/monkey.jpeg';
            this.lessonData.content_title = '';
            this.lessonData.content = 'Patricia and Sheila are good  friends. They are in the park  today. They brought their  food. Patricia has some  yams, fish, and two oranges.   Sheila has bread, beans, and   some milk. Patricia says, “I can see some shade under  the tree. Let’s put our food   there.” They start to play.  They are having a good   time. Now, they are tired. They go to the tree and sit in the shade. Then Patricia  opens her bag, but the food is gone! Patricia looks up   the tree. She says to Sheila, “Look, can you see the  monkeys? They are eating my food.” Sheila looks up. She sees the monkeys.  The monkeys are eating Patricia’s yams, fish, and  oranges. Then, Pat throws a stone at the monkeys.  The monkeys shriek, ”Iiiiihhhhh!” They go away and  carry the food with them. Sheila says, “Do not worry,   Pat. We can share my bread, beans, and milk.”  Patricia is happy.';
          }
      
          if(id==5 && nextId == 1)
          {
            this.lessonData.nextId = nextId;
            this.lessonData.title= 'Patricia falls in the ocean';
            this.lessonData.note = '';
            this.lessonData.image = '../../assets/images/ferry.jpeg';
            this.lessonData.content_title = '';
            this.lessonData.content = 'Patricia and Sheila are  in Mombasa. They see a   huge ship in the ocean. Patricia asks Sheila, “What do you think is on  the huge ship?” Sheila says, “Very many things. They use ships to take  food from Kenya to other countries.” Patricia asks,  “What kind of food do you think is on the ship?” Sheila  tells her, “There are sweet potatoes, yams, arrow roots,  potatoes, cassava, beans, and pumpkins.” “How do you   know?” Patricia asks. “Well,” Sheila says, “My father      works on the ship. Shall I ask him if we can go on the ship?”   They run to talk to Sheila’s father. Then they get on the ship. Patricia sees all the food that is on the ship. Then   when they are on the deck again, a huge rat jumps on Patricia. She screams and runs. Then she falls off the    ship into the ocean. “Help, help!” she screams. Then    Sheila’s father jumps into the ocean and saves Patricia.    Patricia is very wet. Father is very wet. “I do not like ships anymore,” Patricia says. “Can we go home?”';
          }
      
          if(id==5 && nextId == 3)
          {
            this.lessonData.nextId = nextId;
            this.lessonData.title= 'The little red cat';
            this.lessonData.note = '';
            this.lessonData.image = '../../assets/images/redcat.jpeg';
            this.lessonData.content_title = '';
            this.lessonData.content = 'A little red cat has fun in the big city. But when it is  half past seven in the evening, she feels tired, cold,  and hungry. She says to herself, “Now I need to go  home. I need to eat and get warm.” But the poor cat  cannot find her way home. She is lost.  After half an hour, the little red cat sees a pit. There  is food in the pit. The little red cat jumps into the   pit. But there are many huge rats in the pit. They are   bigger than she is. “Nice food!” the rats think. They  go after the cat. Then, the little red cat runs, and  runs, and runs. She runs very fast and very far. Then  she lies down near a house. She feels very sad. She  is so lost and so hungry. Then a nice boy sees her.  He picks her up and takes her home. He gives the cat  rice and some milk. Now the little red cat is happy  again.';
          }
      
          if(id==5 && nextId == 4)
          {
            this.lessonData.nextId = nextId;
            this.lessonData.title= 'Grandfather and the snake';
            this.lessonData.note = '';
            this.lessonData.image = '../../assets/images/grandpa.jpeg';
            this.lessonData.content_title = '';
            this.lessonData.content = 'Tamara and Matthew are home today. Grandfather is coming to  visit. There  are three  huge oranges  in the sufuria. The sufuria is on the table. Grandfather comes in. She is feeling good. Grandfather says, “What is in the sufuria?” Tamara  says, “Those are oranges, Grandfather.” Grandfather  wants to eat an orange. Matthew says, “There are  seeds in the orange, Grandfather. You must peel it   first and take out the seeds. Give it to me. I will help  you peel it.” Grandfather sits on a chair. Matthew  gets a knife and peels an orange. He gives it to  Grandfather. As Grandfather opens his mouth to eat  the orange, a snake drops from the roof onto the  seat. Grandfather is old and he cannot move fast.  Tamara and Matthew run out of the house. They get  a stick and kill the sn';
          }

          if(id==5 && nextId == 5)
          {
            this.lessonData.nextId = nextId;
            this.lessonData.title= 'The big frog';
            this.lessonData.note = '';
            this.lessonData.image = '../../assets/images/frog.jpeg';
            this.lessonData.content_title = '';
            this.lessonData.content = 'Samuel and Matthew like  playing together.  Yesterday they   played with the  spade and hoe. It was not fun.  Samuel cut his  finger. Sometimes  Mother lets them  play at night when there is moonlight. Tonight there is a full moon. They are very happy. They eat quickly and go outside. They want to play with the dog and the duck,   and ride the bike. Father says, “Before you go to play,   feed the dogs, then feed the fish in the pond.” Mat says,   “But Father, there is a frog in the pond. It will jump on    me.” Father says, “Frogs do not bite. Go feed the fish.”  Mat and Sam go to the pond. Mat gets a frog. He holds  the frog and then the frog licks Mat’s face. Then Mat  changes into a big frog. Sam runs away and goes home.  Sam says, “Father! Father, Mat is a frog. Come, let us go   and you will see. The frog licked Mat.” Father goes to the    pond and sees the big frog. He takes the big frog home.    And what do you think will happen next';
          }
          else if(id == 5 && nextId > 5)
          {
            this.presentAlertConfirm('You have finished all the lessons. <strong>Do you wish to take a simple test or Exam?</strong>!!!',5);
          }
          
      

    if(id==6)
    {
      this.lessonData.title= 'Classroom';
      this.details = {1:'stop',2:'stop',3:'hop',4:'point'};
      this.lessonData.note = '1. Walk 2. Stop 3. Hop 4. Point';
      this.lessonData.image = '../../assets/images/childdoctor.jpeg';
      this.lessonData.content_title = 'Who can walk?';
      this.lessonData.content = 'Who can walk? I can walk. Who else can walk? The teacher can walk. Who else can walk? That fat catcan walk. Who else can walk? That big dog can walk.Who else can walk? That fat hen can walk. Who else can walk? That baby cannot walk. Stop, baby! I can help you.';
    }
  }

  homePage(){
    this.router.navigate(['/home']);
  }
  ngOnInit() {
  }

  async presentAlertConfirm(message,id) {
    const alert = await this.alertController.create({
      header: 'Hoooray',
      message: message,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            if(id == 5){
              this.router.navigateByUrl('/tests');
            }else if(id == 4)
            {
              this.createLessons(this.id = 5, this.nextId = 0);
            }
            else if(id == 3)
            {
              this.createLessons(this.id = 4, this.nextId = 0);
            }else if(id == 2)
            {
              this.createLessons(this.id = 3, this.nextId = 0);
            }else if(id == 1)
            {
              this.createLessons(this.id = 2, this.nextId = 0);
            }
            
          }
        }
      ]
    });

    await alert.present();
  }

}

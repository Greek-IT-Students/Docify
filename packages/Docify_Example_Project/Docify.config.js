const MainPage = require('Docify').MainPage;
const GetStarted = require('./src/pages/docs/get-started.md').default;

const LiveCodeExample = require('./src/pages/docs/live-code-example.mdx').default;
const install_c = require('./src/pages/docs/install_c.md').default;
const install_java = require('./src/pages/docs/install_java.md').default;
var clogo = require("./public/assets/clogo.jpg");
var logocsharp = require("./public/assets/1200px-C_Sharp_logo.svg.png");

module.exports = {
  title: 'w3exercises',
  subTitle: 'Learn by example',
  github: 'https://github.com/NektariosFifes',
  githubShort: 'NektariosFifes/w3exercises',
  menuTree: [
    {
      path: '',
      component: MainPage,

      data: {
        features: [
          {
            category:'Backend ',
            title: 'Easy to start',
            subfeatures:[
              {
                title:'C',
                link:'c/examples/fundamentals',
                description:''
              },
              {
                title:'Java',
                link:'java/examples/fundamentals',
                description:''
              }
            ],
            
          },
          {
            category:'Frontend',
            title: '',
            subfeatures:[
              {
                title:'Html',
                link:'/html examples basic',
                description:'Classes,input,output,inheritance'
              },
              
              {
                title:'Css',
                link:'css examples basic',
                description:'classes,styles,flexbox,grid,libraries'
              }
            ],
            
          }
        ]
      }
    },
    ///////////////////////
	{
      path: 'c',
      image1:clogo,
      image2:logocsharp,
      tree2: [
        
        {
          text: 'Instalation',
          path: 'theory/instalation',
          component: install_c
        },
        
        
      ],
      tree: [
        
        {
          text: 'Fundamentals',
          path: 'examples/fundamentals',
          title:'Database program',
          subtitlecomment:'Solutions wotj explanatory theory',
          exerciseslist:[
            {
              goal:'Create input system',
              explanation:'do this this way',
			  link:''
            },
            {
              goal:'Load function',
              explanation:'do this this wayaaaaaa',
			  link:''
            },
			{
				output: ' variable before shift: 64   variable after shift: 256 ',
				goal:'Save function',
              explanation:'do this this way',
			  link:''

			},
			{
				output: ' variable before shift: 64   variable after shift: 256 ',
				goal:'Wrapping up',
              explanation:'do this this way',
			  link:''

			},
          ]


        }
      ]
    },
	{
      path: 'Java',
      image1:clogo,
      image2:logocsharp,
      tree: [
        
        {
          text: 'Instalation',
          path: 'theory/instalation',
          component: install_java
        },
        
        
      ],
      tree2: [
        
        {
          text: 'Fundamentals',
          path: 'examples/fundamentals',
          title:'Database program',
          subtitlecomment:'Solutions wotj explanatory theory',
          exerciseslist:[
            {
              goal:'step1:add two matrices',
              explanation:'do this this way',
			  link:'java exercises/add two matrices'
            },
            {
              goal:'step2:convert to byte',
              explanation:'do this this wayaaaaaa',
			  link:'java/conversion int to byte'
            },
			{
				output: ' variable before shift: 64   variable after shift: 256 ',
				goal:'step3:left shift examplara',
              explanation:'do this this way',
			  link:'java/left shift interger byte'

			},
			{
				output: ' variable before shift: 64   variable after shift: 256 ',
				goal:'Wrapping up',
              explanation:'do this this way',
			  link:'java/left shift interger byte'

			},
          ]


        }
      ]
    },
    {
      path: 'java exercises',
      exercises: [
        {
          path:'add two matrices',
          component: LiveCodeExample,
          title:'Find the something',
          solutioncode:`import java.util.Scanner;
public class Main
{


  public static void main (String args[])
  {
    Scanner in = new Scanner (System.in);
    int m, n, c, d;
      System.out.println ("Enterthe number of rows and columns of matrix");
      m = in.nextInt ();
      n = in.nextInt ();
    int first[][] = new int[m][n];
    int second[][] = new int[m][n];
    int sum[][] = new int[m][n];

      System.out.println ("Enterthe elements of first matrix");
    for (c = 0; c < m; c++)
      for (d = 0; d < n; d++)

	  first[c][d] = in.nextInt ();
      System.out.println ("Enter the elements of second matrix");
    for (c = 0; c < m; c++)
      for (d = 0; d < n; d++)
	  second[c][d] = in.nextInt ();
    for (c = 0; c < m; c++)
      for (d = 0; d < n; d++)
	  sum[c][d] = first[c][d] + second[c][d];	//replace '+' with '-' to subtract matrices
      System.out.println ("Sum of entered matrices:-");
    for (c = 0; c < m; c++)
      {
	for (d = 0; d < n; d++)
	  System.out.print (sum[c][d] + "\t");
	System.out.println ();
      }
  }


}

`,
          language:'java'
        },{
		path:'conversion int to byte',
          component: LiveCodeExample,
          title:'conversion int to byte',
          solutioncode:`public class Main {
        public static void main(String args[]) {
            byte bytevariable;
            int intvariable = 257;
            double doublevariable = 323.142;
            
			 //Error:cannot give a value of type int to a a byte (without a cast)
			//bytevariable = intvariable;
			
			//The value of bytevariable will be the division of 257  by 256(the size of byte) 
            bytevariable = (byte) intvariable;
            System.out.println("intvariable: " + intvariable + " and bytevariable: " + bytevariable);
             
			 
            //double to int
            intvariable = (int) doublevariable;
            System.out.println("d and i " + doublevariable + " " + intvariable);

            //double to byte
            bytevariable = (byte) doublevariable;
            System.out.println("doublevariable: " + doublevariable + " bytevariable:" + bytevariable);
        }
}` ,
		  language:'java',
		  explanation:`The () symbol is a cast. for example (byte)int will convert a 
interger to a byte. In this example  -byte- is the target-type that
we want to convert the initial type: int.If the  target type is larger than the initial type then 
the convertion will return unexpected results.` ,
		 
		},
		{
		path:'left shift interger byte',
          component: LiveCodeExample,
          title:'Left shift byte interger',
          solutioncode:`class Main {
    public static void main(String args[]) {
        byte byt1 = 64, byt2;
        int interger;

        interger = byt1 << 2;
        byt2 = (byte) (byt1 << 2);
        //When shifted both byte and short become int so we have to cast back to byte
        System.out.println("byte before shift: " + byt1);
        System.out.println("byte converted to int after shift: " + interger);
        //
        System.out.println("byte before shift: " + byt1);
        System.out.println("byte after shift: " + byt2 );
    }
}` ,
		  language:'java',
		  explanation:`When shifted both byte and short 
become int so we have to cast back to byte.
Left-shifting doubles the original value. It is a perfomant way of multiplying by 2.But on the
second print we see that the value of byt2 is 0.This is because shifting left discards the bits on the most left
 and adds bits on the left of the number each with the value of 0. When shift your program must be able 
 to deal with such overflows.` ,
		 
		},
		{
		path:'maximum shifts',
          component: LiveCodeExample,
          title:'Maximum shifts',
          solutioncode:`c
lass Main {
    public static void main(String args[]) {
        int i;
        int hexadecimal_to_int = 0xFFFFFDD;
        int maximum_left_shifts=0;
        for (i = 0; i < 4; i++) {
            hexadecimal_to_int = hexadecimal_to_int << 1;
            System.out.println(hexadecimal_to_int);
            if(hexadecimal_to_int<=0){
                maximum_left_shifts = i;
                break;
            }

        }
        System.out.println( "maximum amount of shifts" + "" + maximum_left_shifts );

    }
}` ,
		  language:'java',
		  explanation:''
		 
		},
		{
			path:'convert byte to hexadecimal',
			title:'Byte to hexadecimal conversion',
			solutioncode:`c
lass  Main {
    static public void main(String args[]) {
        char Hexadecimalnumerals[] = {'0', '1', '2', '3', '4', '5', '6', '7',
                '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'
        };

        byte bytetodisplay = (byte) 0xd3;

        System.out.println("here is our byte in hex: 0x" + Hexadecimalnumerals[(bytetodisplay >> 4) & 0x0f] + Hexadecimalnumerals[bytetodisplay & 0x0f]);
    }
}`
           ,explanation:`Sometimes it is not desirable to sign-extend 
values when you are shifting them to the right. 
For example, the following program converts a byte 
value to its hexadecimal string representation. Notice that the shifted 
value is masked by ANDing it with 0x0f to discard any sign-extended bits so that 
the value can be used as an index into the array of hexadecimal characters.`,
              language:'java',
		},
		
      ]
    }
  /////////////////////////
  ],
  theme: {
    palette: {
      primary: {
        main: '#01579b'
      },
      secondary: {
        main: '#e65100',
      },
    }
  },
  options: {
    routerType: 'browser', // hash | browser
  }
}

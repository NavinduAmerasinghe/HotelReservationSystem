Installation Steps

1.Open the folder using VS code
	- there should be 3 folders inside called frontend , backend & hotelLanka
  
2.Open two terminals and go inside frontend & backend using each terminal
	- command --> cd frontend
	          --> cd backend
			  
3.In each terminal type following command respectively t0 install node modules
	- command --> npm install
	
4.Install 'Moesif Origin & CORS changer' extension to the Chrom browser using chrome web store

5.Open your WSO2 integration studio

6.Import the project folder (hotelLanka)

7.Open Windows => Show view => Other => Server => Servers

8.Create a new server according to the labsheet

9.Select WSO2 enterprise integrator 6.6.0 and set the carbon Home and click ‘Next’

10.Add project as configured

11.Finish creating the server

12.Right click on the newly created server and click start

13.Log into the WSO2 management console providing username and password both as ‘admin’

14.Click on the  API’s and copy the path without the context (Ex: http://192.168.8.183:8280)

15.Open the VS Code and open web => src => utils => hostAddress.js and paste the above copied     ip address and assign it to the constant variable called ‘ip’ 

16. Then type following command in the terminals opened in the step 3
			Command --> npm start

17.Then you should see both backend and frontend up and running. 

18.Open the chrome browser and type “ http://localhost:3000/ “ , you should see the landing page of Hotel.lk
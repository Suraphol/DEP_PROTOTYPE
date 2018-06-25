var app = angular.module('myApp',[]);

var statusMasters = [
    {id:'1',label:'ใช้งาน'},
    {id:'2',label:'ปิดใช้งาน'}
]

var units = [{id:'1',label:'สำนักงานเลขานุการกรม',acronym:''},
{id:'2',label:'กลุ่มตรวจสอบภายใน',acronym:''},
{id:'3',label:'กลุ่มพัฒนาระบบบริหาร',acronym:''},
{id:'4',label:'กองยุทธศาสตร์และแผนงาน',acronym:''},
{id:'5',label:'กองกองทุนและส่งเสริมความเสมอภาคคนพิการ',acronym:''},
{id:'6',label:'กองส่งเสริมสิทธิและสวัสดิการคนพิการ',acronym:'', sub:[{lable:'ศูนย์พัฒนาศักยภาพและอาชีพคนพิการพระประแดง'},
                                                    {lable:'ศูนย์พัฒนาศักยภาพและอาชีพคนพิการนครศรีธรรมราช'},
                                                    {lable:'ศูนย์พัฒนาศักยภาพและอาชีพคนพิการขอนแก่น'},
                                                    {lable:'ศูนย์พัฒนาศักยภาพและอาชีพคนพิการ จังหวัดหนองคาย'},
                                                    {lable:'ศูนย์พัฒนาศักยภาพและอาชีพคนพิการบ้านโมกุลเฉลิมพระชนมพรรษา 5 รอบ สมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ จังหวัดลพบุรี'},
                                                    {lable:'ศูนย์พัฒนาศักยภาพและอาชีพคนพิการหยาดฝน จังหวัดเชียงใหม่'},
                                                    {lable:'ศูนย์พัฒนาศักยภาพและอาชีพคนพิการบ้านทองพูนเผ่าพนัส จังหวัดอุบลราชธานี'},
                                                    {lable:'ศูนย์พัฒนาศักยภาพและอาชีพคนพิการบ้านศรีวนาไล จังหวัดอุบลราชธานี'},
                                                    {lable:'ศูนย์ส่งเสริมอาชีพคนพิการ(โรงงานปีสากล)'}]},
{id:'7',label:'กองคุ้มครองสวัสดิภาพและพัฒนาคนพิการ',acronym:'', sub:[{lable:'สถานคุ้มครองและพัฒนาคนพิการบ้านอุบลฮักแพง จังหวัดอุบลราชธานี'},
                                                {lable:'สถานคุ้มครองและพัฒนาคนพิการบ้านราชาวดี(ชาย) จังหวัดนนทบุรี'},
                                                {lable:'สถานคุ้มครองและพัฒนาคนพิการบ้านราชาวดี(หญิง) จังหวัดนนทบุรี'},
                                                {lable:'สถานคุ้มครองและพัฒนาคนพิการการรุณยเวศม์ จังหวัดชลบุรี'},
                                                {lable:'สถานคุ้มครองและพัฒนาคนพิการบ้านกึ่งวิถี(หญิง) จังหวัดปทุมธานี'},
                                                {lable:'สถานคุ้มครองและพัฒนาคนพิการบ้านเฟื่องฟ้า จังหวัดนนทบุรี'},
                                                {lable:'สถานคุ้มครองและพัฒนาคนพิการ จังหวัดราชบุรี'},
                                                {lable:'สถานคุ้มครองและพัฒนาคนพิการบ้านนนทภูมิ จังหวัดนนทบุรี'},
                                                {lable:'สถานคุ้มครองและพัฒนาคนพิการบางปะกง จังหวัดฉะเชิงเทรา'},
                                                {lable:'สถานคุ้มครองและพัฒนาคนพิการพระประแดง จังหวัดสมุทรปราการ'},
                                                {lable:'สถานคุ้มครองและพัฒนาคนพิการบ้านกึ่งวิถี(ชาย) จังหวัดปทุมธานี'}]}]

var fiscalYears = [
    {id:'1',fiscalYear:'2560',status:'ใช้งาน'},
    {id:'2',fiscalYear:'2561',status:'ใช้งาน'}
]

var unitMeasures = [{id:'1',labelTH:'ถุง',labelEN:'BAG'},
{id:'1',labelTH:'เล่ม',labelEN:'BK'},
{id:'2',labelTH:'ขวด',labelEN:'BT'},
{id:'3',labelTH:'ตู้',labelEN:'CAB'},
{id:'4',labelTH:'กล่อง',labelEN:'CRT'},
{id:'5',labelTH:'เครื่อง',labelEN:'MAC'},
{id:'6',labelTH:'โหล',labelEN:'DZ'},
{id:'7',labelTH:'ชิ้น',labelEN:'EA'},
{id:'8',labelTH:'มัด',labelEN:'MD'},]

var bankNames = [{id:'1',bankCode:'001',labelTH:'ธนาคารแห่งประเทศไทย',labelEN:'BOTHTH'},
{id:'2',bankCode:'002',labelTH:'ธนาคารกรุงเทพ',labelEN:'BBL'},
{id:'3',bankCode:'004',labelTH:'ธนาคารกสิกรไทย',labelEN:'KBANK'},
{id:'4',bankCode:'006',labelTH:'ธนาคารกรุงไทย',labelEN:'KTB'},
{id:'5',bankCode:'011',labelTH:'ธนาคารทหารไทย',labelEN:'TMB'},
{id:'6',bankCode:'014',labelTH:'ธนาคารไทยพาณิชย์',labelEN:'SCB'},
{id:'7',bankCode:'025',labelTH:'ธนาคารกรุงศรีอยุธยา',labelEN:'BAY'},
{id:'8',bankCode:'069',labelTH:'ธนาคารเกียรตินาคิน',labelEN:'KKP'},
{id:'9',bankCode:'022',labelTH:'ธนาคารซีไอเอ็มบีไทย',labelEN:'CIMB'},
{id:'10',bankCode:'067',labelTH:'ธนาคารทิสโก้',labelEN:'TISCO'},
{id:'11',bankCode:'065',labelTH:'ธนาคารธนชาต',labelEN:'TBANK'},
{id:'12',bankCode:'024',labelTH:'ธนาคารยูโอบี',labelEN:'UOB'},
{id:'13',bankCode:'020',labelTH:'ธนาคารสแตนดาร์ดชาร์เตอร์ด (ไทย)',labelEN:'SCBT'},
{id:'14',bankCode:'071',labelTH:'ธนาคารไทยเครดิตเพื่อรายย่อย',labelEN:'TCD'},
{id:'15',bankCode:'073',labelTH:'ธนาคารแลนด์ แอนด์ เฮาส์',labelEN:'LHBANK'},
{id:'16',bankCode:'070',labelTH:'ธนาคารไอซีบีซี (ไทย)',labelEN:'ICBC'},
{id:'17',bankCode:'098',labelTH:'ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย',labelEN:'SME'},
{id:'18',bankCode:'034',labelTH:'ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร',labelEN:'BAAC'},
{id:'19',bankCode:'035',labelTH:'ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย',labelEN:'EXIM'},
{id:'20',bankCode:'030',labelTH:'ธนาคารออมสิน',labelEN:'GSB'},
{id:'21',bankCode:'033',labelTH:'ธนาคารอาคารสงเคราะห์',labelEN:'GHB'},
{id:'22',bankCode:'066',labelTH:'ธนาคารอิสลามแห่งประเทศไทย',labelEN:'ISALAM'}]

var materials = [{id:'1',label:'สำนักงาน',sub:[{label:'กระดาษ'},
                                                {label:'ดินสอ'},
                                                {label:'ไม้บรรทัด'},
                                                {label:'เข็มหมุด'}]},
{id:'2',label:'ไฟฟ้าและวิทยุ',sub:[]},
{id:'3',label:'งานบ้านงานครัว',sub:[]},
{id:'4',label:'ก่อสร้าง',sub:[]}]

var durables = [{id:'1',label:'สำนักงาน',sub:[{label:"โต๊ะ"},
{label:"เก้าอี้"},]},
{id:'2',label:'ไฟฟ้าและวิทยุ',sub:[]},
{id:'3',label:'งานบ้านงานครัว',sub:[]},
{id:'4',label:'การเกษตร',sub:[]},
{id:'5',label:'คอมพิวเตอร์',sub:[]}]

var categoryBudgets = [{id:'1', label:'เงินงบประมาณ'},
{id:'2', label:'เงินนอกงบประมาณ'},
{id:'3', label:'เงินบริจาก/เงินช่วยเหลือ'},
{id:'4', label:'อื่นๆ'}]

var acquisitions = [{id:'1', label:'ตกลงราคา'},
{id:'2', label:'สอบราคา'},
{id:'3', label:'ประกวดราคา'},
{id:'4', label:'วิธีพิเศษ'},
{id:'5', label:'รับบริจาก'}]

app.controller('allController',function($scope){
    $scope.fiscalYears = fiscalYears;
    $scope.units = units;
    $scope.unitMeasures = unitMeasures;
    $scope.bankNames = bankNames;
    $scope.materials = materials;
    $scope.durables = durables;
}).controller('ntpController',function($scope){
    $scope.materials = materials;
    $scope.units = units;

    $scope.selectMaterial = function(val){
        console.log(val);
        for(let i=0;i<materials.length;i++){
            if(materials[i].id==val){
                $scope.unitSups = materials[i].sub;
            }
        }
    }
}).controller('drbController',function($scope){
    $scope.fiscalYears = fiscalYears;
    $scope.materials = materials;
    $scope.categoryBudgets = categoryBudgets;
    $scope.acquisitions = acquisitions;
    $scope.durables = durables;
    $scope.units = units;

    $scope.selectDurable = function(val){
        console.log(val);
        for(let i=0;i<durables.length;i++){
            if(durables[i].id==val){
                $scope.unitdurablesSups = durables[i].sub;
            }
        }
    }

    $scope.selectMaterial = function(val){
        console.log(val);
        for(let i=0;i<materials.length;i++){
            if(materials[i].id==val){
                $scope.unitSups = materials[i].sub;
            }
        }
    }
}).controller('bdnController',function($scope){
    $scope.acquisitions = acquisitions;
    $scope.fiscalYears = fiscalYears;
}).controller('dntController',function($scope){
    $scope.acquisitions = acquisitions;
    $scope.fiscalYears = fiscalYears;
})
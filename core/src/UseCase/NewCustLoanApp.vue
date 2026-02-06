<template>
    <div class="p-5 ml-5 mr-5 bg-white rounded-xl">
        <Accordion class="accordianClass" multiple v-model:value="activeNames">
            <div v-if="accountInfo" class="p-4 mb-8 bg-white rounded-xl border border-gray-200">
                <AccordionPanel v-if="accountInfo" value="0" ref="panel0">
                    <AccordionHeader>1. Account Information</AccordionHeader>
                    <AccordionContent>

                        <!-- //////////////////////////////// -->
                        <fieldset class="mt-4">
                            <div class="grid grid-cols-12">
                                <!-- Label -->
                                <div class="col-span-3">
                                    <h4 class="font-semibold">
                                        Are you an account holder ?
                                        <span class="text-red-600">*</span>
                                    </h4>
                                </div>

                                <!-- Input -->
                                <div class="col-span-5">
                                    <RadioButton name="AccountHolderRadioButton" :options=RadioBtnYesNoList
                                        :modelValue=isAccountHolder label=""
                                        @radio-button-on-change="accountHolderOnChange" />

                                </div>


                            </div>

                            <div v-if="isAccountHolder == 'no'" class="info-box mt-4">
                                <div class="info-header">
                                    <span class="info-icon">ℹ️</span>
                                    <div>
                                        <strong>Disclaimer</strong>
                                        <p>
                                            <b>For loan application request, you are required to provide account opening
                                                details also in following application form.</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="grid grid-cols-12 mt-4">
                                <div class="col-span-8">
                                    <TextBox name="AccountNumberTextBox" label="Account number or IBAN"
                                        dataType="numericDashes" maxLength=25 :mandatory=true
                                        mask="****-****-******-**-*" :modelValue=accountNumberValue
                                        labelColor="var(--primary-color)" @text-box-on-key-up="AccountNumberTextBox" />
                                </div>
                            </div>
                            <!-- //////////////////////////////// -->

                        </fieldset>
                        <fieldset>
                            <div class="grid grid-cols-12">
                                <div class="col-span-11"></div>
                                <div class="col-span-1">
                                    <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                        :isDisabled=isNextButtonDisabled @button-on-click="nextButton" />

                                </div>
                            </div>
                        </fieldset>
                    </AccordionContent>
                </AccordionPanel>
            </div>
            <div v-if="verification" class="p-4 mb-8 bg-white rounded-xl border border-gray-200">
                <AccordionPanel v-if="verification" value="1" ref="panel1">
                    <AccordionHeader>2. Verification</AccordionHeader>
                    <AccordionContent>

                        <!-- //////////////////////////////// -->
                        <fieldset class="mt-4">
                            <!-- //////////////////////////////// -->
                            <div v-if="isAccountHolder == 'no'" class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="mobileNoTextBox" label="Enter Mobile Number" mask="****-*******"
                                        dataType="numericDashes" maxLength=12 :mandatory=true :modelValue=mobileNo
                                        @text-box-on-key-up="mobileNoTextBox" />

                                </div>
                                <div class="col-span-4">
                                    <TextBox name="emailAddressTextBox" label="Enter Email Address"
                                        dataType="alphaNumericSpecial" maxLength=12 :mandatory=true
                                        :modelValue=emailAddress @text-box-on-key-up="emailAddressTextBox" />

                                </div>
                                <div class="col-span-2">
                                    <Button label="Send OTP" backgroundColor="var(--primary-color)" name="sendOTPButton"
                                        :isDisabled="isSendOTPButtonDisabled" @button-on-click="sendOTPButton" />

                                </div>
                            </div>
                            <!-- //////////////////////////////// -->


                            <div v-if="OTPFlag || isAccountHolder == 'yes'">
                                <!-- //////////////////////////////// -->
                                <div class="grid grid-cols-12 gap-4 mb-4">
                                    <!-- <div class="col-span-1">
                                    </div> -->
                                    <div class="col-span-10">
                                        <h4>
                                            <b>A verification code has been sent to your registered email address and
                                                mobile number. Please enter the 6-digit code to proceed with your
                                                application.</b>
                                        </h4>
                                    </div>
                                </div>
                                <div class="grid grid-cols-12 gap-4 mb-4">
                                    <div class="col-span-10">
                                        <div class="info-box">
                                            <div class="info-header">
                                                <span class="info-icon">ℹ️</span>
                                                <div>
                                                    <strong>Example: XXX XXX</strong>
                                                    <p>
                                                        XXX - First 3 digits received on SMS<br>
                                                        XXX - Last 3 digits received on Email
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2 mb-2">
                                    <span class="icon-circle">
                                        <i class="pi pi-mobile"></i>
                                    </span>

                                    <span class="text-sm text-gray-700">
                                        +92******4099
                                    </span>
                                </div>
                                <div class="flex items-center gap-2 mb-4">
                                    <span class="icon-circle">
                                        <i class="pi pi-envelope"></i>
                                    </span>
                                    <span class="icon-text">izz****@xyz.com</span>
                                </div>

                                <!-- //////////////////////////////// -->

                                <div class="justify-start">
                                    <InputOtp v-model="InputOtpValue" class="flex justify-start"
                                        inputClass="border-2 focus:border-green-500 focus:ring-0" :length="6"
                                        :disabled="timeLeft === 0" />
                                </div>

                                <div class="mt-4">
                                    <p>
                                        Didn't receive code?
                                        <span class="text-blue-600 cursor-pointer hover:underline"
                                            @click="onResendClick">
                                            Resend
                                        </span>
                                    </p>
                                </div>

                                <span>{{ formattedTime }}</span>
                                <!-- //////////////////////////////// -->

                            </div>
                        </fieldset>
                        <div v-if="OTPFlag || isAccountHolder == 'yes'">
                            <fieldset>
                                <div class="grid grid-cols-12">
                                    <div class="col-span-11"></div>
                                    <div class="col-span-1">
                                        <Button label="Verify" backgroundColor="var(--primary-color)"
                                            name="verifyButton" :isDisabled="verifyButtonDisabled"
                                            @button-on-click="verifyButton" />

                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </AccordionContent>
                </AccordionPanel>
            </div>
            <div v-if="AcPersonalDetails" class="p-4 mb-8 bg-white rounded-xl border border-gray-200">
                <AccordionPanel v-if="AcPersonalDetails" value="2" ref="panel2">
                    <AccordionHeader>3. Account / Personal Details</AccordionHeader>
                    <AccordionContent>

                        <!-- //////////////////////////////// -->
                        <fieldset class="mt-4">
                            <!-- //////////////////////////////// -->
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <Dropdown name="IdentificationTypeDropDown" label="Identification Type"
                                        :mandatory=true :modelValue=identificationType
                                        :optionsList=identificationTypesList
                                        @dropdown-on-change="IdentificationTypeDropDown" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="cnicPassportNumberTextBox" label="CNIC / Passport Number"
                                        dataType="numericDashes" maxLength=25 :mandatory=true mask="*****-*******-*"
                                        :modelValue=cnicNo @text-box-on-key-up="cnicPassportNumberTextBox" />
                                </div>
                                <div class="col-span-2">
                                    <Button label="Fetch Details" backgroundColor="var(--primary-color)"
                                        name="fetchButton" :isDisabled="isFetchButtonDisabled"
                                        @button-on-click="FetchButton" />

                                </div>
                            </div>

                            <!-- //////////////////////////////// -->
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-8">
                                    <TextBox name="fullNameTextBox" label="Full Name (as per CNIC)"
                                        dataType="alphabetsOnly" :isDisabled=true maxLength=25 :mandatory=true
                                        :modelValue=fullName />
                                </div>
                            </div>

                            <!-- //////////////////////////////// -->
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="cnicPassportIssueDateTextBox" label="CNIC / Passport Issue Date"
                                        :isDisabled=false dataType="date" maxLength=10 :mandatory=true
                                        :modelValue=cnicIssueDate mask="**/**/****" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="cnicExpiryDateTextBox" label="CNIC / Passport Expiry Date"
                                        dataType="date" :isDisabled=true maxLength=10 :mandatory=true
                                        :modelValue=cnicExpiryDate mask="**/**/****" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="ntnNumberTextBox" label="NTN Number" dataType="numeric" maxLength=10
                                        :isDisabled=true :mandatory=true :modelValue=ntnNumber />
                                </div>
                            </div>

                            <!-- //////////////////////////////// -->
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-3">
                                    <Dropdown name="salutationDropDown" label="Salutation" :mandatory=false
                                        :modelValue=salutation :optionsList=salutationList
                                        @dropdown-on-change="salutationDropDown" />
                                </div>
                                <div class="col-span-3">
                                    <Dropdown name="qualificationDropDown" label="Educational Qualification"
                                        :mandatory=true :modelValue=qualification :optionsList=qualificationList
                                        @dropdown-on-change="qualificationDropDown" />
                                </div>
                                <div class="col-span-3">
                                    <Dropdown name="maritalStatusDropDown" label="Marital Status" :mandatory=true
                                        :modelValue=maritalStatus :optionsList=maritalStatusList
                                        @dropdown-on-change="maritalStatusDropDown" />
                                </div>
                                <div class="col-span-3">
                                    <TextBox name="dateOfBirthTextBox" label="Date of Birth" dataType="date"
                                        maxLength=10 :isDisabled=true :mandatory=false :modelValue=DobTextBox
                                        mask="**/**/****" />
                                </div>
                            </div>

                            <!-- //////////////////////////////// -->
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-3">
                                    <RadioButton name="fatherSpouseRadioButton" :options=fatherSpouseRadioBtnList
                                        :modelValue=fatherSpouseRadioBtn label=""
                                        @radio-button-on-change="fatherSpouseRadioBtnOnChange" />
                                </div>
                                <div class="col-span-3">
                                    <TextBox name="fatherSpouseNameTextBox" label="Father / Spouse Name"
                                        dataType="alphabetsOnly" maxLength=30 :mandatory=true
                                        :modelValue=fatherSpouseName />
                                </div>
                                <div class="col-span-3">
                                    <TextBox name="motherNameTextBox" label="Mother Name" dataType="alphabetsOnly"
                                        maxLength=30 :isDisabled=true :mandatory=true :modelValue=motherName />
                                </div>
                            </div>

                        </fieldset>
                        <fieldset class="mt-4">
                            <div class="section-header">
                                <h3>Family Information</h3>
                            </div>
                            <!-- //////////////////////////////// -->
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-3">
                                    <label for="">Number of Dependents <span class="text-red-600">*</span> </label>
                                </div>
                                <div class="col-span-3">
                                    <TextBox name="childrenTextBox" label="Children" dataType="numeric" maxLength=30
                                        :mandatory=false :modelValue=children />
                                </div>
                                <div class="col-span-3">
                                    <TextBox name="childrenTextBox" label="Others" dataType="numeric" maxLength=12
                                        :mandatory=false :modelValue=otherDependent />
                                </div>
                                <div class="col-span-3">
                                    <TextBox name="otherPhoneNoTextBox" label="Other Phone Number"
                                        dataType="numericDashes" maxLength=12 :mandatory=true :modelValue=otherPhoneNo
                                        mask="****-*******" />
                                </div>
                            </div>

                            <!-- //////////////////////////////// -->
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="nextOfKinTextBox" label="Next of Kin" dataType="alphaNumericSpecial"
                                        maxLength=30 :mandatory=true :modelValue=nextOfKin />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="nextOfKinRelationTextBox" label="Next of Kin Relation"
                                        dataType="alphabetsOnly" maxLength=30 :mandatory=true
                                        :modelValue=nextOfKinRelation />

                                </div>
                                <div class="col-span-4">
                                    <TextBox name="nextOfKinCnicTextBox" label="Next of Kin CNIC"
                                        dataType="numericSpecial" maxLength=17 :mandatory=true :modelValue=nextOfKinCnic
                                        mask="*****-*******-*" />

                                </div>
                            </div>

                            <!-- //////////////////////////////// -->
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-12">
                                    <TextBox name="nextOfKinAddressTextBox" label="Next of Kin Address"
                                        dataType="alphaNumericSpecial" maxLength=30 :mandatory=true
                                        :modelValue=nextOfKinAddress />

                                </div>
                            </div>

                            <!-- //////////////////////////////// -->
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-3">
                                    <label>
                                        Do you have a vehicle? <span class="text-red-600">*</span>
                                    </label>
                                </div>
                                <div class="col-span-2">
                                    <RadioButton name="haveVehicleRadioButton" :options=RadioBtnYesNoList
                                        :modelValue=haveVehicle label=""
                                        @radio-button-on-change="haveVehicleRadioButtonOnChange" />
                                </div>
                                <div v-if="haveVehicle == 'yes' ? true : false" class="col-span-3">
                                    <TextBox name="vehicleModelTextBox"
                                        label="If yes, Enter Make, Model and Registration Number"
                                        dataType="alphaNumericSpecial" maxLength=12 :mandatory=true
                                        :modelValue=vehicleModel />
                                </div>
                                <div v-if="haveVehicle == 'yes' ? true : false" class="col-span-3">
                                    <Dropdown name="vehicleStatusDropDown" label="Vehicle Status" :mandatory=true
                                        :modelValue=vehicleStatus :optionsList=vehicleStatusList />
                                </div>
                            </div>

                            <!-- //////////////////////////////// -->
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-3">
                                    <label>
                                        Mode of Communication by Bank <span class="text-red-600">*</span>
                                    </label>
                                </div>
                                <div class="col-span-4" :lg="3">
                                    <RadioButton name="bankModeOfCoomunicationRadioButton"
                                        :options=bankModeOfCoomunicationList :modelValue=bankModeOfCoomunication
                                        label="" @radio-button-on-change="bankModeOfCoomunicationOnChange" />
                                </div>
                            </div>
                        </fieldset>
                        <fieldset class="mt-4">
                            <div class="section-header">
                                <h3>Account Information</h3>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <Dropdown name="purposeOfAccountDropDown" label="Purpose of Account" :mandatory=true
                                        :modelValue=purposeOfAccount :optionsList=purposeOfAccountList
                                        @dropdown-on-change="purposeOfAccountDropDown" />

                                </div>
                                <div class="col-span-4">
                                    <Dropdown name="accountCategoryDropDown" label="Account Category" :mandatory=true
                                        :modelValue=accountCategory :optionsList=accountCategoryList
                                        @dropdown-on-change="accountCategoryDropDown" />

                                </div>
                                <div class="col-span-4">
                                    <Dropdown name="currencyDropDown" label="Currency" :mandatory=true
                                        :modelValue=currency :optionsList=currencyList
                                        @dropdown-on-change="currencyDropDown" />
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-2">
                                    <label>
                                        Cheque Book Required <span class="text-red-600">*</span>
                                    </label>
                                    <div class="text-red-500 text-xs">(Charges Applied: Rs.700)</div>
                                </div>
                                <div class="col-span-2">
                                    <RadioButton name="chequeBookRequiredRadioButton" :options=RadioBtnYesNoList
                                        :modelValue=chequeBookRequired label=""
                                        @radio-button-on-change="chequeBookRequiredRadioButton" />
                                </div>
                                <!-- ///////////////////////////// -->
                                <div class="col-span-2">
                                    <label>
                                        e-Statement Required <span class="text-red-600">*</span>
                                    </label>
                                    <div class="text-red-500 text-xs">(Charges Applied: Rs.700)</div>
                                </div>
                                <div class="col-span-2">
                                    <RadioButton name="estatementRequiredRadioButton" :options=RadioBtnYesNoList
                                        :modelValue=estatementRequired label=""
                                        @radio-button-on-change="estatementRequiredRadioButton" />
                                </div>
                                <!-- ///////////////////////////////////// -->
                                <div class="col-span-2">
                                    <label>
                                        SMS Alert Required <span class="text-red-600">*</span>
                                    </label>
                                    <div class="text-red-500 text-xs">(Charges Applied: Rs.700)</div>
                                </div>
                                <div class="col-span-2">
                                    <RadioButton name="smsAlertRadioButton" :options=RadioBtnYesNoList
                                        :modelValue=smsAlert label="" @radio-button-on-change="smsAlertRadioButton" />
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <label>
                                        Are you a PEP?(Political Exposed Person) <span class="text-red-600">*</span>
                                    </label>
                                </div>
                                <div class="col-span-4" :lg="10">
                                    <RadioButton name="isPepRadioButton" :options=PepList :modelValue=isPep label=""
                                        @radio-button-on-change="isPepRadioButton" />
                                </div>
                            </div>

                            <!-- ///////////////////////////// -->
                            <!--<div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4" >
                            <dropdown v-model="salutation2" :options="salutationList2" label="Salutation" />
                        </div>
                        <div class="col-span-4" >
                            <textbox v-model="fullname2" label="Full Name (as per CNIC) *"
                                placeholder="Full Name (as per CNIC)" />
                        </div>
                        <div class="col-span-4" >
                            <textbox v-model="cnicNo2" type="mask" mask="9999-9999999" max-length="12"
                                label=" CNIC Number *" placeholder="CNIC Number " />
                        </div>
                        <div class="col-span-4" >
                            <textbox v-model="cnicIssueDate2" type="mask" mask="99/99/9999"
                                label="CNIC / Passport Issue Date *" placeholder="CNIC / Passport Issue Date *" />
                        </div>
                    </div>
                    -->
                            <!-- ///////////////////////////// -->
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <!-- <div class="col-span-4" >
                            <textbox v-model="cnicExpiryDate2" type="mask" mask="99/99/9999"
                                label="CNIC / Passport Expiry Date *" placeholder="CNIC / Passport Expiry Date *" />
                        </div> -->
                                <div class="col-span-4">
                                    <Dropdown name="modeOfTransactionDropDown" label="Mode of Transaction"
                                        :mandatory=true :modelValue=modeOfTransaction :optionsList=modeOfTransactionList
                                        @dropdown-on-change="modeOfTransactionDropDown" />

                                </div>
                                <div class="col-span-4">
                                    <Dropdown name="deliveryChannelsDropDown" label="Delivery Channels" :mandatory=true
                                        :modelValue=deliveryChannels :optionsList=deliveryChannelsList
                                        @dropdown-on-change="deliveryChannelsDropDown" />

                                </div>
                                <div class="col-span-4">
                                    <TextBox name="highestBalanceTextBox" label="Highest Balance" dataType="numeric"
                                        maxLength=20 :mandatory=true :modelValue=highestBalance
                                        @text-box-on-blur="highestBalanceTextBox" />
                                </div>
                            </div>

                            <!-- ///////////////////////////// -->
                            <div class="grid grid-cols-12 gap-4 mb-4">

                                <div class="col-span-4">
                                    <TextBox name="depositPerMonthTextBox" label="Deposit per Month" dataType="numeric"
                                        maxLength=20 :mandatory=true :modelValue=depositPerMonth
                                        @text-box-on-blur="depositPerMonthTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <Dropdown name="NumberOfDepositPerMonthDropDown"
                                        label="Number of Deposits per Month" :mandatory=true
                                        :modelValue=NumberOfDepositPerMonth :optionsList=NumberOfDepositPerMonthList
                                        @dropdown-on-change="NumberOfDepositPerMonthDropDown" />

                                </div>
                                <div class="col-span-4">
                                    <Dropdown name="NumberOfWithdrawalPerMonthDropDown"
                                        label="Number of withdrawals per Month" :mandatory=true
                                        :modelValue=NumberOfWithdrawalPerMonth
                                        :optionsList=NumberOfWithdrawalPerMonthList
                                        @dropdown-on-change="NumberOfWithdrawalPerMonthDropDown" />

                                </div>
                            </div>
                            <!-- //////////////////////////////// -->

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <label><b>Are you a U.S Citizen ? <span class="text-red-600">*</span> </b>
                                    </label>
                                </div>
                                <div class="col-span-4">
                                    <RadioButton name="USCitizenRadioButton" :options=RadioBtnYesNoList
                                        :modelValue=USCitizen label="" @radio-button-on-change="USCitizenRadioButton" />
                                </div>
                            </div>

                            <div v-if="USCitizen == 'yes' ? true : false">
                                <!-- //////////////////////////////// -->
                                <div class="grid grid-cols-12 gap-4 mb-4">
                                    <div class="col-span-5">
                                        <label>Are you a U.S Card Holder ? <span class="text-red-600">*</span>
                                        </label>
                                    </div>
                                    <div class="col-span-4">
                                        <RadioButton name="USCardHolderRadioButton" :options=RadioBtnYesNoList
                                            :modelValue=USCardHolder label=""
                                            @radio-button-on-change="USCardHolderRadioButton" />
                                    </div>
                                    <!-- //////////// -->
                                    <div class="col-span-5">
                                        <label>Are you a U.S Resident for tax purposes ? <span
                                                class="text-red-600">*</span>
                                        </label>
                                    </div>
                                    <div class="col-span-4">
                                        <RadioButton name="USResidentTaxPurposeRadioButton" :options=RadioBtnYesNoList
                                            :modelValue=USResidentTaxPurpose label=""
                                            @radio-button-on-change="USResidentTaxPurposeRadioButton" />
                                    </div>
                                    <!-- //////////// -->
                                    <div class="col-span-5">
                                        <label>(a)- Were you born in the U.S ? <span class="text-red-600">*</span>
                                        </label>
                                    </div>
                                    <div class="col-span-4">
                                        <RadioButton name="USBornRadioButton" :options=RadioBtnYesNoList
                                            :modelValue=USBorn label="" @radio-button-on-change="USBornRadioButton" />
                                    </div>
                                </div>

                                <!-- ///////////////////////////////// -->
                                <div class="grid grid-cols-12 gap-4 mb-4">
                                    <div class="col-span-5">
                                        <label>(b)- Were you born outside the U.S to U.S Citizen/s ? <span
                                                class="text-red-600">*</span>
                                        </label>
                                    </div>
                                    <div class="col-span-4">
                                        <RadioButton name="outsideUSBornRadioButton" :options=RadioBtnYesNoList
                                            :modelValue=outsideUSBorn label=""
                                            @radio-button-on-change="outsideUSBornRadioButton" />
                                    </div>
                                </div>

                                <!-- ///////////////////////////////// -->
                                <div class="grid grid-cols-12 gap-4 mb-4">
                                    <div class="col-span-5">
                                        <label>Does the Required identity document have a U.S address or mention
                                            "Country of
                                            Stay" as U.S ? <span class="text-red-600">*</span>
                                        </label>
                                    </div>
                                    <div class="col-span-4">
                                        <RadioButton name="CountryOfStayRadioButton" :options=RadioBtnYesNoList
                                            :modelValue=CountryOfStay label=""
                                            @radio-button-on-change="CountryOfStayRadioButton" />
                                    </div>
                                </div>

                                <!-- ///////////////////////////////// -->
                                <div class="grid grid-cols-12 gap-4 mb-4">
                                    <div class="col-span-5">
                                        <label>Does the Account Holder / Mandate Holder have a U.S telephone Number ?
                                            <span class="text-red-600">*</span>
                                        </label>
                                    </div>
                                    <div class="col-span-4">
                                        <RadioButton name="USTelephoneNoRadioButton" :options=RadioBtnYesNoList
                                            :modelValue=USTelephoneNo label=""
                                            @radio-button-on-change="USTelephoneNoRadioButton" />
                                    </div>
                                </div>

                                <!-- ///////////////////////////////// -->
                                <div class="grid grid-cols-12 gap-4 mb-4">
                                    <div class="col-span-5">
                                        <label>Will there be standing instructions to transfer funds to an account in
                                            ths U.S or
                                            directions regularly received from a U.S address ? <span
                                                class="text-red-600">*</span>
                                        </label>
                                    </div>
                                    <div class="col-span-4">
                                        <RadioButton name="standingInstructionsRadioButton" :options=RadioBtnYesNoList
                                            :modelValue=standingInstructions label=""
                                            @radio-button-on-change="standingInstructionsRadioButton" />
                                    </div>
                                </div>

                                <!-- ///////////////////////////////// -->
                                <div class="grid grid-cols-12 gap-4 mb-4">
                                    <div class="col-span-5">
                                        <label>Does the Account have a U.S mailing address, including a U.S P.O Box ?
                                            <span class="text-red-600">*</span> </label>
                                    </div>
                                    <div class="col-span-4">
                                        <RadioButton name="USMailingAddressRadioButton" :options=RadioBtnYesNoList
                                            :modelValue=USMailingAddress label=""
                                            @radio-button-on-change="USMailingAddressRadioButton" />
                                    </div>
                                </div>

                                <!-- ///////////////////////////////// -->
                                <div class="grid grid-cols-12 gap-4 mb-4">
                                    <div class="col-span-5">
                                        <label>Does the Account have "Hold Mail" address or an "in care of" address that
                                            is the
                                            sole
                                            address provided for this account ? <span class="text-red-600">*</span>
                                        </label>
                                    </div>
                                    <div class="col-span-4">
                                        <RadioButton name="HoldMailRadioButton" :options=RadioBtnYesNoList
                                            :modelValue=HoldMail label=""
                                            @radio-button-on-change="HoldMailRadioButton" />
                                    </div>
                                </div>

                                <!-- ///////////////////////////// -->
                                <div class="grid grid-cols-12 gap-4 mb-4">
                                    <div class="col-span-6">
                                        <TextBox name="TaxIdenNumberTextBox" label="Tax Identification Number"
                                            dataType="numeric" maxLength=20 :mandatory=true :modelValue=TaxIdenNumber />
                                    </div>
                                </div>
                            </div>
                            <!-- ///////////////////////////////// -->
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-5">
                                    <label><b>Are you a tax resident of a country other than U.S and Pakistan ? <span
                                                class="text-red-600">*</span> </b></label>
                                </div>
                                <div class="col-span-4">
                                    <RadioButton name="TaxResidentCountryRadioButton" :options=RadioBtnYesNoList
                                        :modelValue=TaxResidentCountry label=""
                                        @radio-button-on-change="TaxResidentCountryRadioButton" />
                                </div>
                            </div>

                            <!-- ///////////////////////////////// -->
                            <div class="grid grid-cols-12 gap-4 mb-4" v-if="TaxResidentCountry == 'yes' ? true : false">
                                <div class="col-span-4">
                                    <Dropdown name="CountryDropDown" label="Name of Country" :mandatory=true
                                        :modelValue=Country :optionsList=CountryList
                                        @dropdown-on-change="CountryDropDown" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="CRSTinTextBox" label="CRS TIN" dataType="alphaNumericSpecial"
                                        maxLength=20 :mandatory=true :modelValue=CRSTin
                                        @text-box-on-blur="CRSTinTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <Dropdown name="ReasonDropDown" label="Reason" :mandatory=true :modelValue=Reason
                                        :optionsList=ReasonList @dropdown-on-change="ReasonDropDown" />
                                </div>
                            </div>
                        </fieldset>

                        <!-- //////////////////////////////// -->
                        <fieldset class="mt-4">
                            <div class="section-header">
                                <h3>Current Residential Address</h3>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <Dropdown name="CountryDropDown" label="Country" :mandatory=true
                                        :modelValue=CurrAddCountry :optionsList=CountryList
                                        @dropdown-on-change="CurrAddCountryDropDown" />
                                </div>
                                <div class="col-span-4">
                                    <Dropdown name="ProvinceDropDown" label="Province" :mandatory=true
                                        :modelValue=Province :optionsList=ProvinceList
                                        @dropdown-on-change="CurrAddProvinceDropDown" />
                                </div>
                                <div class="col-span-4">
                                    <Dropdown name="CityDropDown" label="City" :mandatory=true :modelValue=City
                                        :optionsList=CityList @dropdown-on-change="CurrAddCityDropDown" />
                                </div>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="AreaTextBox" label="Area" dataType="alphaNumericSpecial" maxLength=30
                                        :mandatory=true :modelValue=Area @text-box-on-key-up="CurrAddAreaTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="BlockTextBox" label="Block" dataType="alphaNumericSpecial"
                                        maxLength=30 :mandatory=true :modelValue=BlockTextBoxValue
                                        @text-box-on-key-up="CurrAddBlockTextBox" />

                                </div>
                                <div class="col-span-4">
                                    <TextBox name="HouseNoTextBox" label="House No." dataType="alphaNumericSpecial"
                                        maxLength=30 :mandatory=true :modelValue=HouseNo
                                        @text-box-on-key-up="CurrAddHouseNoTextBox" />

                                </div>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-6">
                                    <TextBox name="NearestLandMarkTextBox" label="Nearest Landmark"
                                        dataType="alphaNumericSpecial" maxLength=50 :mandatory=true
                                        :modelValue=NearestLandMark
                                        @text-box-on-key-up="CurrAddNearestLandMarkTextBox" />
                                </div>
                                <div class="col-span-6">
                                    <Dropdown name="ResidenceStatusDropDown" label="Residence Status" :mandatory=true
                                        :modelValue=ResidenceStatus :optionsList=ResidenceStatusList
                                        @dropdown-on-change="CurrAddResidenceStatusDropDown" />
                                </div>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="timeAtCurrentAddressTextBox"
                                        label="How long have you been living at the current address?"
                                        dataType="alphaNumericSpecial" maxLength=30 :mandatory=true
                                        :modelValue=timeAtCurrentAddress
                                        @text-box-on-key-up="CurrAddtimeAtCurrentAddressTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <Dropdown name="AccomodationTypeDropDown" label="Type of Accomodation"
                                        :mandatory=true :modelValue=AccomodationType :optionsList=AccomodationTypeList
                                        @dropdown-on-change="CurrAddAccomodationTypeDropDown" />
                                </div>
                                <div class="col-span-4" v-if="AccomodationType == 'Rented' ? true : false">
                                    <TextBox name="rentInRsTextBox" label="If rented, monthly rent in Rs."
                                        dataType="numericSpecial" maxLength=17 :mandatory=true :modelValue=rentInRs
                                        @text-box-on-key-up="CurrAddrentInRsTextBox" />

                                </div>
                            </div>
                        </fieldset>
                        <!-- //////////////////////////////// -->
                        <fieldset class="mt-4">
                            <div class="grid grid-cols-12 gap-4 mb-2">
                                <div class="section-header col-span-3">
                                    <h3>Permanent Address</h3>
                                </div>
                                <div class="col-span-9">
                                    <!-- <div class="flex flex-col gap-4 mb-4"> -->
                                    <Checkbox name="PermanentAddressCheckBox"
                                        chekboxLabel="Permanent Address is Same as Current Address" :mandatory=false
                                        :modelValue=PermanentAddress
                                        @update:modelValue="onCheckBoxPermanentAddressChange" />
                                    <!-- </div> -->
                                </div>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <Dropdown name="CountryDropDown" label="Country" :mandatory=true
                                        :isDisabled="PermanentAddress" :modelValue=PermanentAddCountry
                                        :optionsList=CountryList />
                                </div>
                                <div class="col-span-4">
                                    <Dropdown name="ProvinceDropDown" label="Province" :mandatory=true
                                        :isDisabled="PermanentAddress" :modelValue=PermanentProvince
                                        :optionsList=ProvinceList />
                                </div>
                                <div class="col-span-4">
                                    <Dropdown name="CityDropDown" label="City" :mandatory=true :modelValue=PermanentCity
                                        :isDisabled="PermanentAddress" :optionsList=CityList />
                                </div>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="AreaTextBox" label="Area" dataType="alphaNumericSpecial" maxLength=30
                                        :isDisabled="PermanentAddress" :mandatory=true :modelValue=PermanentArea />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="BlockTextBox" label="Block" dataType="alphaNumericSpecial"
                                        :isDisabled="PermanentAddress" maxLength=30 :mandatory=true
                                        :modelValue=PermanentBlockTextBoxValue />

                                </div>
                                <div class="col-span-4">
                                    <TextBox name="HouseNoTextBox" label="House No." dataType="alphaNumericSpecial"
                                        :isDisabled="PermanentAddress" maxLength=30 :mandatory=true
                                        :modelValue=PermanentHouseNo />

                                </div>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-3">
                                    <TextBox name="NearestLandMarkTextBox" label="Nearest Landmark"
                                        dataType="alphaNumericSpecial" maxLength=50 :mandatory=true
                                        :isDisabled="PermanentAddress" :modelValue=PermanentNearestLandMark />
                                </div>
                                <div class="col-span-3">
                                    <Dropdown name="ResidenceStatusDropDown" label="Residence Status" :mandatory=true
                                        :isDisabled="PermanentAddress" :modelValue=PermanentResidenceStatus
                                        :optionsList=ResidenceStatusList />
                                </div>
                                <div class="col-span-3">
                                    <Dropdown name="AccomodationTypeDropDown" label="Type of Accomodation"
                                        :mandatory=true :modelValue=PermanentAccomodationType
                                        :isDisabled="PermanentAddress" :optionsList=AccomodationTypeList />
                                </div>
                                <div class="col-span-3" v-if="PermanentAccomodationType == 'Rented' ? true : false">
                                    <TextBox name="rentInRsTextBox" label="If rented, monthly rent in Rs."
                                        dataType="numericSpecial" maxLength=17 :mandatory=true
                                        :isDisabled="PermanentAddress" :modelValue=PermanentrentInRs />

                                </div>
                            </div>
                        </fieldset>
                        <!-- //////////////////////////////// -->
                        <fieldset class="mt-4">
                            <div class="grid grid-cols-12 gap-4 mb-2">
                                <div class="section-header col-span-3">
                                    <h3>Temporary Address</h3>
                                </div>
                                <div class="col-span-9">
                                    <!-- <div class="flex flex-col gap-4 mb-4"> -->
                                    <Checkbox name="TempAddressCheckBox"
                                        chekboxLabel="Temporary Address is Same as Current Address" :mandatory=false
                                        :modelValue=TempAddress @update:modelValue="onTemporaryAddressCheckBoxChange" />
                                    <!-- </div> -->
                                </div>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <Dropdown name="CountryDropDown" label="Country" :mandatory=true
                                        :isDisabled="TempAddress" :modelValue=TempAddCountry :optionsList=CountryList />
                                </div>
                                <div class="col-span-4">
                                    <Dropdown name="ProvinceDropDown" label="Province" :mandatory=true
                                        :isDisabled="TempAddress" :modelValue=Province :optionsList=ProvinceList />
                                </div>
                                <div class="col-span-4">
                                    <Dropdown name="CityDropDown" label="City" :mandatory=true :modelValue=TempCity
                                        :isDisabled="TempAddress" :optionsList=CityList />
                                </div>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="AreaTextBox" label="Area" dataType="alphaNumericSpecial" maxLength=30
                                        :isDisabled="TempAddress" :mandatory=true :modelValue=TempArea />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="BlockTextBox" label="Block" dataType="alphaNumericSpecial"
                                        :isDisabled="TempAddress" maxLength=30 :mandatory=true
                                        :modelValue=TempBlockTextBoxValue />

                                </div>
                                <div class="col-span-4">
                                    <TextBox name="HouseNoTextBox" label="House No." dataType="alphaNumericSpecial"
                                        :isDisabled="TempAddress" maxLength=30 :mandatory=true
                                        :modelValue=TempHouseNo />

                                </div>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-3">
                                    <TextBox name="NearestLandMarkTextBox" label="Nearest Landmark"
                                        :isDisabled="TempAddress" dataType="alphaNumericSpecial" maxLength=50
                                        :mandatory=true :modelValue=TempNearestLandMark />
                                </div>
                                <div class="col-span-3">
                                    <Dropdown name="ResidenceStatusDropDown" label="Residence Status" :mandatory=true
                                        :isDisabled="TempAddress" :modelValue=TempResidenceStatus
                                        :optionsList=ResidenceStatusList />
                                </div>
                                <div class="col-span-3">
                                    <Dropdown name="AccomodationTypeDropDown" label="Type of Accomodation"
                                        :isDisabled="TempAddress" :mandatory=true :modelValue=TempAccomodationType
                                        :optionsList=AccomodationTypeList />
                                </div>
                                <div class="col-span-3" v-if="TempAccomodationType == 'Rented' ? true : false">
                                    <TextBox name="rentInRsTextBox" label="If rented, monthly rent in Rs."
                                        :isDisabled="TempAddress" dataType="numericSpecial" maxLength=17 :mandatory=true
                                        :modelValue=TemprentInRs />

                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div class="grid grid-cols-12 gap-4">
                                <div class="col-span-11" :lg="21"></div>
                                <div class="col-span-1" :lg="3">
                                    <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                        :isDisabled="isNextButtonAcPersonalDetailsDisabled"
                                        @button-on-click="nextButtonAcPersonalDetails" />

                                </div>
                            </div>
                        </fieldset>
                    </AccordionContent>
                </AccordionPanel>
            </div>
            <div v-if="AcPersonalDetailsExisting" class="p-4 mb-8 bg-white rounded-xl border border-gray-200">
                <AccordionPanel v-if="AcPersonalDetailsExisting" value="2" ref="panel2">
                    <AccordionHeader>3. Account / Personal Details</AccordionHeader>
                    <AccordionContent>

                        <!-- //////////////////////////////// -->
                        <fieldset class="mt-4">
                            <!-- //////////////////////////////// -->
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <Dropdown name="IdentificationTypeDropDown" label="Identification Type"
                                        :mandatory=true :modelValue=identificationType
                                        :optionsList=identificationTypesList />

                                </div>
                                <div class="col-span-4">
                                    <TextBox name="cnicPassportNumberTextBox" label="CNIC / Passport Number"
                                        dataType="numericDashes" maxLength=25 :mandatory=true mask="*****-*******-*"
                                        :modelValue=cnicNo />

                                </div>
                            </div>

                            <!-- //////////////////////////////// -->
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-8">
                                    <TextBox name="fullNameTextBox" label="Full Name (as per CNIC)"
                                        dataType="alphabetsOnly" :isDisabled=true maxLength=25 :mandatory=true
                                        :modelValue=fullName />

                                </div>
                            </div>

                            <!-- //////////////////////////////// -->
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="cnicPassportIssueDateTextBox" label="CNIC / Passport Issue Date"
                                        dataType="date" maxLength=10 :mandatory=true :modelValue=cnicIssueDate
                                        :isDisabled=true mask="**/**/****" />

                                </div>
                                <div class="col-span-4">
                                    <TextBox name="cnicExpiryDateTextBox" label="CNIC / Passport Expiry Date"
                                        dataType="date" :isDisabled=true maxLength=10 :mandatory=true
                                        :modelValue=cnicExpiryDate mask="**/**/****" />

                                </div>
                                <div class="col-span-4">
                                    <TextBox name="ntnNumberTextBox" label="NTN Number" dataType="numeric" maxLength=10
                                        :isDisabled=true :mandatory=true :modelValue=ntnNumber />
                                </div>
                            </div>

                            <!-- //////////////////////////////// -->
                            <div class="grid grid-cols-12 gap-4 mb-4">

                                <div class="col-span-3">
                                    <Dropdown name="salutationDropDown" label="Salutation" :mandatory=false
                                        :modelValue=salutation :optionsList=salutationList
                                        @dropdown-on-change="salutationDropDown" />

                                </div>
                                <div class="col-span-3">
                                    <Dropdown name="qualificationDropDown" label="Educational Qualification"
                                        :mandatory=true :modelValue=qualification :optionsList=qualificationList
                                        @dropdown-on-change="qualificationDropDown" />

                                </div>
                                <div class="col-span-3">
                                    <Dropdown name="maritalStatusDropDown" label="Marital Status" :mandatory=true
                                        :modelValue=maritalStatus :optionsList=maritalStatusList
                                        @dropdown-on-change="maritalStatusDropDown" />
                                </div>
                                <div class="col-span-3">
                                    <TextBox name="dateOfBirthTextBox" label="Date of Birth" dataType="date"
                                        maxLength=10 :isDisabled=true :mandatory=false :modelValue=DobTextBox
                                        mask="**/**/****" />

                                </div>
                            </div>

                            <!-- //////////////////////////////// -->
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <RadioButton name="fatherSpouseRadioButton" :options=fatherSpouseRadioBtnList
                                        :modelValue=fatherSpouseRadioBtn label=""
                                        @radio-button-on-change="fatherSpouseRadioBtnOnChange" />
                                </div>
                                <div class="col-span-3">
                                    <TextBox name="fatherSpouseNameTextBox" label="Father / Spouse Name"
                                        dataType="alphabetsOnly" maxLength=30 :mandatory=true
                                        :modelValue=fatherSpouseName />

                                </div>
                                <div class="col-span-3">
                                    <TextBox name="motherNameTextBox" label="Mother Name" dataType="alphabetsOnly"
                                        maxLength=30 :isDisabled=true :mandatory=true :modelValue=motherName />
                                </div>
                            </div>

                        </fieldset>
                        <fieldset class="mt-4">
                            <div class="section-header">
                                <h3>Family Information</h3>
                            </div>
                            <!-- //////////////////////////////// -->
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-2">
                                    <label for="">Number of Dependents <span class="text-red-600">*</span> </label>
                                </div>
                                <div class="col-span-3">
                                    <TextBox name="childrenTextBox" label="Children" dataType="numeric" maxLength=30
                                        :mandatory=false :modelValue=children />

                                </div>
                                <div class="col-span-3">
                                    <TextBox name="childrenTextBox" label="Others" dataType="numeric" maxLength=12
                                        :mandatory=false :modelValue=otherDependent />

                                </div>
                                <div class="col-span-4">
                                    <TextBox name="otherPhoneNoTextBox" label="Other Phone Number"
                                        dataType="numericDashes" maxLength=12 :mandatory=true :modelValue=otherPhoneNo
                                        mask="****-*******" />

                                </div>
                            </div>

                            <!-- //////////////////////////////// -->
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-3">
                                    <label>
                                        Do you have a vehicle? <span class="text-red-600">*</span>
                                    </label>
                                </div>
                                <div class="col-span-2">
                                    <RadioButton name="haveVehicleRadioButton" :options="RadioBtnYesNoList"
                                        :modelValue=haveVehicle label=""
                                        @radio-button-on-change="haveVehicleRadioButtonOnChange" />
                                </div>
                                <div class="col-span-3" v-if="haveVehicle == 'yes' ? true : false" :md="6" :lg="6">
                                    <TextBox name="vehicleModelTextBox"
                                        label="If yes, Enter Make, Model and Registration Number"
                                        dataType="alphaNumericSpecial" maxLength=12 :mandatory=true
                                        :modelValue=vehicleModel />

                                </div>
                                <div class="col-span-4" v-if="haveVehicle == 'yes' ? true : false" :md="6" :lg="6">
                                    <Dropdown name="vehicleStatusDropDown" label="Vehicle Status" :mandatory=true
                                        :modelValue=vehicleStatus :optionsList=vehicleStatusList />
                                </div>
                            </div>

                            <!-- //////////////////////////////// -->
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <label>
                                        Mode of Communication by Bank <span class="text-red-600">*</span>
                                    </label>
                                </div>
                                <div class="col-span-3">
                                    <RadioButton name="bankModeOfCoomunicationRadioButton"
                                        :options=bankModeOfCoomunicationList :modelValue=bankModeOfCoomunication
                                        label="" @radio-button-on-change="bankModeOfCoomunicationOnChange" />
                                </div>
                            </div>
                        </fieldset>
                        <!-- //////////////////////////////// -->
                        <fieldset class="mt-4">
                            <div class="section-header">
                                <h3>Current Residential Address</h3>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <Dropdown name="CountryDropDown" label="Country" :mandatory=true
                                        :modelValue=CurrAddCountry :optionsList=CountryList
                                        @dropdown-on-change="CurrAddCountryDropDown" />
                                </div>
                                <div class="col-span-4">
                                    <Dropdown name="ProvinceDropDown" label="Province" :mandatory=true
                                        :modelValue=Province :optionsList=ProvinceList
                                        @dropdown-on-change="CurrAddProvinceDropDown" />
                                </div>
                                <div class="col-span-4">
                                    <Dropdown name="CityDropDown" label="City" :mandatory=true :modelValue=City
                                        :optionsList=CityList @dropdown-on-change="CurrAddCityDropDown" />
                                </div>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="AreaTextBox" label="Area" dataType="alphaNumericSpecial" maxLength=30
                                        :mandatory=true :modelValue=Area @text-box-on-key-up="CurrAddAreaTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="BlockTextBox" label="Block" dataType="alphaNumericSpecial"
                                        maxLength=30 :mandatory=true :modelValue=BlockTextBoxValue
                                        @text-box-on-key-up="CurrAddBlockTextBox" />

                                </div>
                                <div class="col-span-4">
                                    <TextBox name="HouseNoTextBox" label="House No." dataType="alphaNumericSpecial"
                                        maxLength=30 :mandatory=true :modelValue=HouseNo
                                        @text-box-on-key-up="CurrAddHouseNoTextBox" />

                                </div>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-6">
                                    <TextBox name="NearestLandMarkTextBox" label="Nearest Landmark"
                                        dataType="alphaNumericSpecial" maxLength=50 :mandatory=true
                                        :modelValue=NearestLandMark
                                        @text-box-on-key-up="CurrAddNearestLandMarkTextBox" />
                                </div>
                                <div class="col-span-6">
                                    <Dropdown name="ResidenceStatusDropDown" label="Residence Status" :mandatory=true
                                        :modelValue=ResidenceStatus :optionsList=ResidenceStatusList
                                        @dropdown-on-change="CurrAddResidenceStatusDropDown" />
                                </div>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="timeAtCurrentAddressTextBox"
                                        label="How long have you been living at the current address?"
                                        dataType="alphaNumericSpecial" maxLength=30 :mandatory=true
                                        :modelValue=timeAtCurrentAddress
                                        @text-box-on-key-up="CurrAddtimeAtCurrentAddressTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <Dropdown name="AccomodationTypeDropDown" label="Type of Accomodation"
                                        :mandatory=true :modelValue=AccomodationType :optionsList=AccomodationTypeList
                                        @dropdown-on-change="CurrAddAccomodationTypeDropDown" />
                                </div>
                                <div class="col-span-4" v-if="AccomodationType == 'Rented' ? true : false">
                                    <TextBox name="rentInRsTextBox" label="If rented, monthly rent in Rs."
                                        dataType="numericSpecial" maxLength=17 :mandatory=true :modelValue=rentInRs
                                        @text-box-on-key-up="CurrAddrentInRsTextBox" />

                                </div>
                            </div>
                        </fieldset>
                        <!-- //////////////////////////////// -->
                        <fieldset class="mt-4">
                            <div class="grid grid-cols-12 gap-4 mb-2">
                                <div class="section-header col-span-3">
                                    <h3>Permanent Address</h3>
                                </div>
                                <div class="col-span-9">
                                    <!-- <div class="flex flex-col gap-4 mb-4"> -->
                                    <Checkbox name="PermanentAddressCheckBox"
                                        chekboxLabel="Permanent Address is Same as Current Address" :mandatory=false
                                        :modelValue=PermanentAddress
                                        @update:modelValue="onCheckBoxPermanentAddressChange" />
                                    <!-- </div> -->
                                </div>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <Dropdown name="CountryDropDown" label="Country" :mandatory=true
                                        :isDisabled="PermanentAddress" :modelValue=PermanentAddCountry
                                        :optionsList=CountryList />
                                </div>
                                <div class="col-span-4">
                                    <Dropdown name="ProvinceDropDown" label="Province" :mandatory=true
                                        :isDisabled="PermanentAddress" :modelValue=PermanentProvince
                                        :optionsList=ProvinceList />
                                </div>
                                <div class="col-span-4">
                                    <Dropdown name="CityDropDown" label="City" :mandatory=true :modelValue=PermanentCity
                                        :isDisabled="PermanentAddress" :optionsList=CityList />
                                </div>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="AreaTextBox" label="Area" dataType="alphaNumericSpecial" maxLength=30
                                        :isDisabled="PermanentAddress" :mandatory=true :modelValue=PermanentArea />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="BlockTextBox" label="Block" dataType="alphaNumericSpecial"
                                        :isDisabled="PermanentAddress" maxLength=30 :mandatory=true
                                        :modelValue=PermanentBlockTextBoxValue />

                                </div>
                                <div class="col-span-4">
                                    <TextBox name="HouseNoTextBox" label="House No." dataType="alphaNumericSpecial"
                                        :isDisabled="PermanentAddress" maxLength=30 :mandatory=true
                                        :modelValue=PermanentHouseNo />

                                </div>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-3">
                                    <TextBox name="NearestLandMarkTextBox" label="Nearest Landmark"
                                        :isDisabled="PermanentAddress" dataType="alphaNumericSpecial" maxLength=50
                                        :mandatory=true :modelValue=PermanentNearestLandMark />
                                </div>
                                <div class="col-span-3">
                                    <Dropdown name="ResidenceStatusDropDown" label="Residence Status" :mandatory=true
                                        :isDisabled="PermanentAddress" :modelValue=PermanentResidenceStatus
                                        :optionsList=ResidenceStatusList />
                                </div>
                                <div class="col-span-3">
                                    <Dropdown name="AccomodationTypeDropDown" label="Type of Accomodation"
                                        :isDisabled="PermanentAddress" :mandatory=true
                                        :modelValue=PermanentAccomodationType :optionsList=AccomodationTypeList
                                        @dropdown-on-change="PerAddAccomodationTypeDropDown" />
                                </div>
                                <div class="col-span-3" v-if="PermanentAccomodationType == 'Rented' ? true : false">
                                    <TextBox name="rentInRsTextBox" label="If rented, monthly rent in Rs."
                                        :isDisabled="PermanentAddress" dataType="numericSpecial" maxLength=17
                                        :mandatory=true :modelValue=PermanentrentInRs />

                                </div>
                            </div>
                        </fieldset>
                        <!-- //////////////////////////////// -->
                        <fieldset class="mt-4">
                            <div class="grid grid-cols-12 gap-4 mb-2">
                                <div class="section-header col-span-3">
                                    <h3>Temporary Address</h3>
                                </div>
                                <div class="col-span-9">
                                    <!-- <div class="flex flex-col gap-4 mb-4"> -->
                                    <Checkbox name="TempAddressCheckBox"
                                        chekboxLabel="Temporary Address is Same as Current Address" :mandatory=false
                                        :modelValue=TempAddress @update:modelValue="onTemporaryAddressCheckBoxChange" />
                                    <!-- </div> -->
                                </div>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <Dropdown name="CountryDropDown" label="Country" :mandatory=true
                                        :isDisabled="TempAddress" :modelValue=TempAddCountry :optionsList=CountryList />
                                </div>
                                <div class="col-span-4">
                                    <Dropdown name="ProvinceDropDown" label="Province" :mandatory=true
                                        :isDisabled="TempAddress" :modelValue=TempProvince :optionsList=ProvinceList />
                                </div>
                                <div class="col-span-4">
                                    <Dropdown name="CityDropDown" label="City" :mandatory=true :modelValue=TempCity
                                        :isDisabled="TempAddress" :optionsList=CityList />
                                </div>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="AreaTextBox" label="Area" dataType="alphaNumericSpecial" maxLength=30
                                        :isDisabled="TempAddress" :mandatory=true :modelValue=TempArea />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="BlockTextBox" label="Block" dataType="alphaNumericSpecial"
                                        :isDisabled="TempAddress" maxLength=30 :mandatory=true
                                        :modelValue=TempBlockTextBoxValue />

                                </div>
                                <div class="col-span-4">
                                    <TextBox name="HouseNoTextBox" label="House No." dataType="alphaNumericSpecial"
                                        :isDisabled="TempAddress" maxLength=30 :mandatory=true
                                        :modelValue=TempHouseNo />

                                </div>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-3">
                                    <TextBox name="NearestLandMarkTextBox" label="Nearest Landmark"
                                        :isDisabled="TempAddress" dataType="alphaNumericSpecial" maxLength=50
                                        :mandatory=true :modelValue=TempNearestLandMark />
                                </div>
                                <div class="col-span-3">
                                    <Dropdown name="ResidenceStatusDropDown" label="Residence Status" :mandatory=true
                                        :isDisabled="TempAddress" :modelValue=TempResidenceStatus
                                        :optionsList=ResidenceStatusList />
                                </div>
                                <div class="col-span-3">
                                    <Dropdown name="AccomodationTypeDropDown" label="Type of Accomodation"
                                        :isDisabled="TempAddress" :mandatory=true :modelValue=TempAccomodationType
                                        :optionsList=AccomodationTypeList
                                        @dropdown-on-change="TempAddAccomodationTypeDropDown" />
                                </div>
                                <div class="col-span-3" v-if="TempAccomodationType == 'Rented' ? true : false">
                                    <TextBox name="rentInRsTextBox" label="If rented, monthly rent in Rs."
                                        :isDisabled="TempAddress" dataType="numericSpecial" maxLength=17 :mandatory=true
                                        :modelValue=TemprentInRs />

                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div class="grid grid-cols-12 gap-4">
                                <div class="col-span-11"></div>
                                <div class="col-span-1">
                                    <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                        :isDisabled="isNextButtonAcPersonalDetailsExistingDisabled"
                                        @button-on-click="nextButtonAcPersonalDetails" />
                                </div>
                            </div>
                        </fieldset>
                    </AccordionContent>
                </AccordionPanel>
            </div>
            <div v-if="OccupationalDetails" class="p-4 mb-8 bg-white rounded-xl border border-gray-200">
                <AccordionPanel v-if="OccupationalDetails" value="3" ref="panel3">
                    <AccordionHeader>4. Occupational Details</AccordionHeader>
                    <AccordionContent>

                        <!-- //////////////////////////////// -->
                        <fieldset class="mt-4">
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-3">
                                    <Dropdown name="occupationalStatusDropDown" label="Occupational Status"
                                        :mandatory=true :modelValue=OccupationalStatusValue
                                        :optionsList=OccupationalStatusList
                                        @dropdown-on-change="occupationalStatusDropDown" />

                                </div>
                                <div class="col-span-3">
                                    <TextBox name="occupationProfessionTextBox" label="Occupation / Profession"
                                        dataType="alphaNumericSpecial" maxLength=20 :mandatory=false
                                        :modelValue=occupationProfession
                                        @text-box-on-key-up="occupationProfessionTextBox" />

                                </div>
                                <div class="col-span-3">
                                    <TextBox name="employmemntLengthTextBox" label="Length of Employment"
                                        dataType="alphaNumericSpecial" maxLength=20 :mandatory=false
                                        :modelValue=employmemntLength @text-box-on-key-up="employmemntLengthTextBox" />

                                </div>
                                <div class="col-span-3">
                                    <TextBox name="employerNameTextBox" label="Employer Name"
                                        dataType="alphaNumericSpecial" maxLength=45 :mandatory=true
                                        :modelValue=employerName @text-box-on-key-up="employerNameTextBox" />
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="employmentYearsTextBox" label="How Many Years in present Employment?"
                                        dataType="alphaNumericSpecial" maxLength=12 :mandatory=true
                                        :modelValue=employmentYears @text-box-on-key-up="employmentYearsTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="positionTextBox" label="Position / Designation"
                                        dataType="alphaNumericSpecial" maxLength=12 :mandatory=true :modelValue=position
                                        @text-box-on-key-up="positionTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="officeAddressTextBox" label="Office Address"
                                        dataType="alphaNumericSpecial" maxLength=45 :mandatory=true
                                        :modelValue=officeAddress @text-box-on-key-up="officeAddressTextBox" />
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="phoneTextBox" label="Phone" dataType="alphaNumericSpecial"
                                        maxLength=12 :mandatory=false :modelValue=phone mask="****-*******"
                                        @text-box-on-key-up="cnicNoTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="faxTextBox" label="Fax" dataType="alphaNumericSpecial" maxLength=12
                                        :mandatory=false :modelValue=fax mask="***-*******"
                                        @text-box-on-key-up="cnicNoTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="officeEmailTextBox" label="Office Email" :mandatory=false
                                        dataType="alphaNumericSpecial" maxLength=20 :modelValue=officeEmail
                                        @text-box-on-key-up="cnicNoTextBox" />
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-12">
                                    <span>
                                        <b>Previous Employer</b>
                                        <span>
                                            (Required only if the current employment is less than 1 year)
                                        </span>
                                    </span>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-3">
                                    <TextBox name="employerName2TextBox" label="Employer Name"
                                        dataType="alphaNumericSpecial" maxLength=45 :mandatory=false
                                        :modelValue=employerName2 mask="***-*******"
                                        @text-box-on-key-up="cnicNoTextBox" />
                                </div>
                                <div class="col-span-3">
                                    <TextBox name="phone2TextBox" label="Phone" dataType="alphaNumericSpecial"
                                        :mandatory=false maxLength=12 :modelValue=phone2 mask="****-*******"
                                        @text-box-on-key-up="cnicNoTextBox" />
                                </div>
                                <div class="col-span-3">
                                    <TextBox name="fax2TextBox" label="Fax" dataType="alphaNumericSpecial" maxLength=12
                                        :mandatory=false :modelValue=fax2 mask="***-*******"
                                        @text-box-on-key-up="cnicNoTextBox" />
                                </div>
                                <div class="col-span-3">
                                    <TextBox name="inEmploymentSinceTextBox" label="In Employment since"
                                        dataType="alphaNumericSpecial" maxLength=20 :mandatory=false
                                        :modelValue=inEmploymentSince @text-box-on-key-up="cnicNoTextBox" />
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-3">
                                    <textbox v-model="inEmploymentSince" :required="true" maxLength="20"
                                        label="In Employment since" @text-box-on-key-up="cnicNoTextBox" />
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-12">
                                    <label>
                                        Preferred Mailing Address <span class="text-red-600">*</span>
                                    </label>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-12">
                                    <RadioButton name="preferredMailingAddressRadioButton"
                                        :options=preferredMailingAddressList :modelValue=preferredMailingAddress
                                        label="" @radio-button-on-change="preferredMailingAddressOnChange" />
                                </div>
                            </div>

                            <!-- //////////////////////////////// -->

                        </fieldset>
                        <fieldset>
                            <div class="grid grid-cols-12 gap-4">
                                <div class="col-span-11" :lg="21"></div>
                                <div class="col-span-1" :lg="3">
                                    <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                        :isDisabled="isDisabledNextButtonOccupationalDetails"
                                        @button-on-click="nextButtonOccupationalDetails" />
                                </div>
                            </div>
                        </fieldset>
                    </AccordionContent>
                </AccordionPanel>
            </div>
            <div v-if="incomeDetails" class="p-4 mb-8 bg-white rounded-xl border border-gray-200">
                <AccordionPanel v-if="incomeDetails" value="4" ref="panel4">
                    <AccordionHeader>5. Income Details</AccordionHeader>
                    <AccordionContent>

                        <!-- //////////////////////////////// -->
                        <fieldset class="mt-4">

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="grossMonthlySalaryTextBox" label="Gross Monthly Salary"
                                        dataType="NumericSpecial" maxLength=40 :mandatory=true
                                        :modelValue=grossMonthlySalary
                                        @text-box-on-key-up="grossMonthlySalaryTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="netMonthlyIncomeTextBox" label="Net Monthly Income"
                                        dataType="NumericSpecial" maxLength=40 :mandatory=true
                                        :modelValue=netMonthlyIncome @text-box-on-key-up="netMonthlyIncomeTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="monthlyIncomeFromOtherSourcesTabularTextBox"
                                        label="Monthly Income from Other Sources Tabular" dataType="NumericSpecial"
                                        maxLength=40 :mandatory=false :modelValue=monthlyIncomeFromOtherSourcesTabular
                                        @text-box-on-key-up="monthlyIncomeFromOtherSourcesTabularTextBox" />
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="otherIncomeSourcesTextBox" label="Sources of Other Income"
                                        dataType="NumericSpecial" maxLength=40 :mandatory=false
                                        :modelValue=otherIncomeSources />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="totalGrossMonthlyIncomeTextBox" label="Total Gross Monthly Income"
                                        dataType="NumericSpecial" maxLength=40 :mandatory=false
                                        :modelValue=totalGrossMonthlyIncome />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="endOfServiceBenefitsTextBox"
                                        label="End of Service Benefits as of last month (for Salaried)"
                                        dataType="alphaNumericSpecial" maxLength=40 :mandatory=false
                                        :modelValue=endOfServiceBenefits />
                                </div>
                            </div>

                            <!-- //////////////////////////////// -->

                        </fieldset>
                        <fieldset>
                            <div class="grid grid-cols-12 gap-4">
                                <div class="col-span-11" :lg="21"></div>
                                <div class="col-span-1" :lg="3">
                                    <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                        :isDisabled="nextButtonIncomeDetailsDisabled"
                                        @button-on-click="nextButtonIncomeDetails" />
                                </div>
                            </div>
                        </fieldset>
                    </AccordionContent>
                </AccordionPanel>
            </div>
            <div v-if="desiredFinancingDetails" class="p-4 mb-8 bg-white rounded-xl border border-gray-200">
                <AccordionPanel v-if="desiredFinancingDetails" value="5" ref="panel5">
                    <AccordionHeader>6. Desired Financing Details</AccordionHeader>
                    <AccordionContent>

                        <fieldset class="mt-4">
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div :lg="3" class="col-span-2">
                                    <label>Type of Vehicle <span class="text-red-600">*</span> </label>
                                </div>
                                <div class="col-span-4">

                                    <RadioButton name="vehicleTypeRadioButton" :options=vehicleTypeList
                                        :modelValue=vehicleType label=""
                                        @radio-button-on-change="vehicleTypeOnChange" />
                                </div>

                                <div :lg="7" class="col-span-3">
                                    <TextBox name="makeTextBox" label="Make" dataType="NumericSpecial" maxLength=40
                                        :mandatory=true :modelValue=make @text-box-on-key-up="makeTextBox" />
                                </div>

                                <div class="col-span-3">
                                    <TextBox name="modelTextBox" label="Model" dataType="alphaNumericSpecial"
                                        maxLength=40 :mandatory=true :modelValue=model
                                        @text-box-on-key-up="modelTextBox" />
                                </div>


                            </div>



                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="colorTextBox" label="Color" dataType="alphaumericSpecial"
                                        maxLength=40 :mandatory=false :modelValue=color
                                        @text-box-on-key-up="colorTextBox" />
                                </div>
                                <div :lg="7" class="col-span-4">
                                    <TextBox name="downPaymentTextBox" label="Equity / Down Payment"
                                        dataType="alphaumericSpecial" maxLength=40 :mandatory=true
                                        :modelValue=downPayment @text-box-on-key-up="downPaymentTextBox" />
                                </div>

                                <div class="col-span-4">
                                    <TextBox name="priceTextBox" label="Price (Rs.)" dataType="alphaumericSpecial"
                                        maxLength=40 :mandatory=false :modelValue=price />
                                </div>

                            </div>



                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div :lg="3" class="col-span-2">
                                    <label>Mode of Financing <span class="text-red-600">*</span> </label>
                                </div>
                                <div class="col-span-3">
                                    <RadioButton name="modeOfFinancingRadioButton" :options=modeOfFinancingList
                                        :modelValue=modeOfFinancing label=""
                                        @radio-button-on-change="modeOfFinancingOnChange" />
                                </div>

                                <div :lg="15" class="col-span-4">
                                    <TextBox name="desiredFinancingAmountTextBox" label="Desired Financing Amount"
                                        dataType="alphaumericSpecial" maxLength=40 :mandatory=false
                                        :modelValue=desiredFinancingAmount />
                                </div>

                            </div>



                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div :lg="3" class="col-span-2">
                                    <label>Mark-up Mode <span class="text-red-600">*</span> </label>
                                </div>
                                <div class="col-span-3">
                                    <RadioButton name="markUpModeRadioButton" :options=markUpModeList
                                        :modelValue=markUpMode label="" @radio-button-on-change="markUpModeOnChange" />
                                </div>

                                <div :lg="7" class="col-span-3">
                                    <Dropdown name="modeOfRepaymentDropDown" label="Modes of Repayment" :mandatory=false
                                        :modelValue=modeOfRepayment :optionsList=modeOfRepaymentList />

                                </div>
                                <div class="col-span-3">
                                    <Dropdown name="desiredFinancingDropDown" label="Desired Financing Tenure"
                                        :mandatory=false :modelValue=desiredFinancing
                                        :optionsList=desiredFinancingList />

                                </div>

                            </div>



                            <!-- ================= Note ================= -->
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-12">
                                    <span>
                                        Pricing and Repayment: The pricing and payment / repayment terms of the facility
                                        will be communicated to you in an offer letter of the Bank and agreement(s).
                                    </span>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <div class="grid grid-cols-12 gap-4">
                                <div class="col-span-11" :lg="21"></div>
                                <div class="col-span-1" :lg="3">
                                    <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                        :isDisabled="isNextButtonDesiredFinancingDetailsDisabled"
                                        @button-on-click="nextButtonDesiredFinancingDetails" />
                                </div>
                            </div>
                        </fieldset>
                    </AccordionContent>
                </AccordionPanel>
            </div>
            <div v-if="references" class="p-4 mb-8 bg-white rounded-xl border border-gray-200">
                <AccordionPanel v-if="references" value="6" ref="panel6">
                    <AccordionHeader>7. References</AccordionHeader>
                    <AccordionContent>

                        <!-- //////////////////////////////// -->
                        <fieldset class="mt-4">
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <h4>
                                        <b>Reference 1 </b>
                                    </h4>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="Reference1NameTextBox" label="Name" dataType="alphabetsOnly"
                                        maxLength=30 :mandatory=true :modelValue=Reference1Name
                                        @text-box-on-key-up="Reference1NameTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="Reference1RelationshipTextBox" label="Relationship"
                                        dataType="alphabetsOnly" maxLength=30 :mandatory=true
                                        :modelValue=Reference1Relationship
                                        @text-box-on-key-up="Reference1RelationshipTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="Reference1CNICTextBox" label="CNIC" mask="*****-*******-*"
                                        dataType="numericDashes" maxLength=15 :mandatory=true :modelValue=Reference1CNIC
                                        @text-box-on-key-up="Reference1CNICTextBox" />
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="Reference1HomePhoneTextBox" label="Home Phone" mask="****-*******"
                                        dataType="numericDashes" maxLength=12 :mandatory=false
                                        :modelValue=Reference1HomePhone
                                        @text-box-on-key-up="Reference1HomePhoneTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="Reference1OtherPhoneTextBox" label="Other Phone" mask="****-*******"
                                        dataType="numericDashes" maxLength=12 :mandatory=false
                                        :modelValue=Reference1OtherPhone
                                        @text-box-on-key-up="Reference1OtherPhoneTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="Reference1MobileTextBox" label="Mobile" mask="****-*******"
                                        dataType="numericDashes" maxLength=12 :mandatory=true
                                        :modelValue=Reference1Mobile @text-box-on-key-up="Reference1MobileTextBox" />
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="Reference1AddressTextBox" label="Address"
                                        dataType="alphaNumericSpecial" maxLength=50 :mandatory=false
                                        :modelValue=Reference1Address @text-box-on-key-up="Reference1AddressTextBox" />
                                </div>
                            </div>

                            <!-- //////////////////////////////// -->

                        </fieldset>
                        <fieldset class="mt-4">
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <h4>
                                        <b>Reference 2 </b>
                                    </h4>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="Reference2NameTextBox" label="Name" dataType="alphabetsOnly"
                                        maxLength=30 :mandatory=true :modelValue=Reference2Name
                                        @text-box-on-key-up="Reference2NameTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="Reference2RelationshipTextBox" label="Relationship"
                                        dataType="alphabetsOnly" maxLength=30 :mandatory=true
                                        :modelValue=Reference2Relationship
                                        @text-box-on-key-up="Reference2RelationshipTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="Reference2CNICTextBox" label="CNIC" mask="*****-*******-*"
                                        dataType="numericDashes" maxLength=15 :mandatory=true :modelValue=Reference2CNIC
                                        @text-box-on-key-up="Reference2CNICTextBox" />
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="Reference2HomePhoneTextBox" label="Home Phone" mask="****-*******"
                                        dataType="numericDashes" maxLength=12 :mandatory=false
                                        :modelValue=Reference2HomePhone
                                        @text-box-on-key-up="Reference2HomePhoneTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="Reference2OtherPhoneTextBox" label="Other Phone" mask="****-*******"
                                        dataType="numericDashes" maxLength=12 :mandatory=false
                                        :modelValue=Reference2OtherPhone
                                        @text-box-on-key-up="Reference2OtherPhoneTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="Reference2MobileTextBox" label="Mobile" mask="****-*******"
                                        dataType="numericDashes" maxLength=12 :mandatory=true
                                        :modelValue=Reference2Mobile @text-box-on-key-up="Reference2MobileTextBox" />
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="Reference2AddressTextBox" label="Address"
                                        dataType="alphaNumericSpecial" maxLength=50 :mandatory=false
                                        :modelValue=Reference2Address @text-box-on-key-up="Reference2AddressTextBox" />
                                </div>
                            </div>

                            <!-- //////////////////////////////// -->

                        </fieldset>
                        <fieldset>
                            <div class="grid grid-cols-12 gap-4">
                                <div class="col-span-11" :lg="21"></div>
                                <div class="col-span-1" :lg="3">
                                    <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                        :isDisabled="isNextButtonReferencesDisabled"
                                        @button-on-click="nextButtonReferences" />
                                </div>
                            </div>
                        </fieldset>
                    </AccordionContent>
                </AccordionPanel>
            </div>
            <div v-if="Documents" class="p-4 mb-8 bg-white rounded-xl border border-gray-200">
                <AccordionPanel v-if="Documents" value="7" ref="panel7">
                    <AccordionHeader>8. Documents</AccordionHeader>
                    <AccordionContent>

                        <!-- //////////////////////////////// -->
                        <fieldset class="mt-4">
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-5">
                                    <h3>
                                        <b>Are You a Salaried Individual or Self Employed / Business
                                            Individual? <span class="text-red-600">*</span></b>
                                    </h3>
                                </div>
                                <div class="col-span-5">
                                    <RadioButton name="SalariedOrselfEmployedRadioButton" :options=RadioBtnDocumentList
                                        :modelValue=SalariedOrselfEmployed label=""
                                        @radio-button-on-change="SalariedOrselfEmployedChange" />
                                </div>
                            </div>

                            <div v-if="SalariedOrselfEmployed == 'salariedIndividual' ? true : false">
                                <div class="grid grid-cols-12 gap-4 mb-4">
                                    <div class="col-span-4">
                                        <h4>
                                            <b>Loan Applicant (Salaried Individual) </b>
                                        </h4>
                                    </div>
                                </div>

                                <fieldset class="mt-4">
                                    <div class="section-header">
                                        <h3>CNIC</h3>
                                    </div>
                                    <div class="grid grid-cols-12 gap-4 mb-4">
                                        <div class="col-span-5">
                                            <FileUpload name="CNICFront" label="CNIC Front" icon="pi pi-id-card"
                                                @file-selected="handleFile" />

                                        </div>
                                        <div class="col-span-2">
                                        </div>
                                        <div class="col-span-5">
                                            <FileUpload name="CNICBack" label="CNIC Back" icon="pi pi-id-card"
                                                @file-selected="handleFile" />
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset class="mt-4">
                                    <div class="section-header">
                                        <h3>Bank Statement</h3>
                                    </div>

                                    <div class="grid grid-cols-12 gap-4 mb-4 items-center">
                                        <!-- Upload -->
                                        <div class="col-span-5">
                                            <FileUpload name="bankStatement" label="Upload" icon="pi pi-receipt"
                                                @file-selected="handleFile" />
                                        </div>

                                        <!-- OR Divider -->
                                        <div class="col-span-2 flex justify-center"
                                            v-if="isAccountHolder == 'yes' ? true : false">
                                            <Divider layout="vertical" class="!hidden md:!flex">
                                                <b>OR</b>
                                            </Divider>
                                            <Divider layout="horizontal" class="!flex md:!hidden" align="center">
                                                <b>OR</b>
                                            </Divider>
                                        </div>

                                        <!-- Fetch Button -->
                                        <div class="col-span-5 flex justify-center"
                                            v-if="isAccountHolder == 'yes' ? true : false">
                                            <Button label="Fetch Bank Statement" backgroundColor="var(--primary-color)"
                                                name="fetchBankStatementButton"
                                                @button-on-click="fetchBankStatementButton" />
                                        </div>
                                    </div>
                                </fieldset>


                                <fieldset class="mt-4">
                                    <div class="section-header">
                                        <h3>Passport Photograph</h3>
                                    </div>
                                    <div class="grid grid-cols-12 gap-4 mb-4 items-center">
                                        <!-- Upload -->
                                        <div class="col-span-5">
                                            <FileUpload name="takePhoto" label="Take Photo" icon="pi pi-camera"
                                                :showDragFileText=false @file-selected="handleFile" />
                                            <!-- <CameraCapture label="Take Photo" icon="pi pi-camera"
                                        @image-captured="handleFile" /> -->
                                        </div>

                                        <!-- OR Divider -->
                                        <div class="col-span-2 flex justify-center">
                                            <Divider layout="vertical" class="!hidden md:!flex">
                                                <b>OR</b>
                                            </Divider>
                                            <Divider layout="horizontal" class="!flex md:!hidden" align="center">
                                                <b>OR</b>
                                            </Divider>
                                        </div>

                                        <div class="col-span-5">
                                            <FileUpload name="uploadFromGallery" label="Upload from Gallery"
                                                icon="pi pi-image" @file-selected="handleFile" />
                                        </div>
                                    </div>

                                </fieldset>

                                <fieldset class="mt-4">
                                    <div class="section-header">
                                        <h3>Employment certificate / job card</h3>
                                    </div>
                                    <div class="grid grid-cols-12 gap-4 mb-4 items-center">
                                        <!-- Upload -->
                                        <div class="col-span-5">
                                            <FileUpload name="uploadDocument" label="Upload" icon="pi pi-receipt"
                                                @file-selected="handleFile" />
                                        </div>

                                        <!-- OR Divider -->
                                        <div class="col-span-2 flex justify-center">
                                            <Divider layout="vertical" class="!hidden md:!flex">
                                                <b>OR</b>
                                            </Divider>
                                            <Divider layout="horizontal" class="!flex md:!hidden" align="center">
                                                <b>OR</b>
                                            </Divider>
                                        </div>

                                        <div class="col-span-5">
                                            <FileUpload name="anyOtherDocument"
                                                label="Any other document required by Bank" icon="pi pi-plus"
                                                @file-selected="handleFile" />
                                        </div>
                                    </div>

                                </fieldset>

                                <fieldset class="mt-4">
                                    <div class="grid grid-cols-12 gap-4 mb-4">
                                        <div class="section-header col-span-12">
                                            <h3>Salary Slips</h3>
                                        </div>

                                    </div>
                                    <div class="grid grid-cols-12 gap-4 mb-4" align="middle">
                                        <div class="col-span-4">
                                            <FileUpload name="salarySlip1" label="Salary Slip" icon="pi pi-file-pdf"
                                                @file-selected="handleFile" />
                                        </div>
                                        <div class="col-span-4">
                                            <FileUpload name="salarySlip2" label="Salary Slip" icon="pi pi-file-pdf"
                                                @file-selected="handleFile" />
                                        </div>
                                        <div class="col-span-4">
                                            <FileUpload name="salarySlip3" label="Salary Slip" icon="pi pi-file-pdf"
                                                @file-selected="handleFile" />
                                        </div>
                                    </div>
                                </fieldset>

                            </div>
                            <div v-if="SalariedOrselfEmployed == 'selfEmployedBusinessIndivial' ? true : false">
                                <div class="grid grid-cols-12 gap-4 mb-4">
                                    <div class="col-span-4">
                                        <h4>
                                            <b>Loan Applicant (Self Employed / Business
                                                Individual) </b>
                                        </h4>
                                    </div>
                                </div>

                                <fieldset class="mt-4">
                                    <div class="section-header">
                                        <h3>CNIC</h3>
                                    </div>
                                    <div class="grid grid-cols-12 gap-4 mb-4">
                                        <div class="col-span-5">
                                            <FileUpload name="CNICFrontSelfEmployed" label="CNIC Front"
                                                icon="pi pi-id-card" @file-selected="handleFile" />
                                        </div>
                                        <div class="col-span-2">
                                        </div>
                                        <div class="col-span-5">
                                            <FileUpload name="CNICBackSelfEmployed" label="CNIC Back"
                                                icon="pi pi-id-card" @file-selected="handleFile" />
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset class="mt-4">
                                    <div class="section-header">
                                        <h3>Bank Statement</h3>
                                    </div>
                                    <div class="grid grid-cols-12 gap-4 mb-4 items-center">
                                        <!-- Upload -->
                                        <div class="col-span-5">
                                            <FileUpload name="bankStatementSelfEmployed" label="Upload"
                                                icon="pi pi-receipt" @file-selected="handleFile" />
                                        </div>

                                        <!-- OR Divider -->
                                        <div class="col-span-2 flex justify-center"
                                            v-if="isAccountHolder == 'yes' ? true : false">
                                            <Divider layout="vertical" class="!hidden md:!flex">
                                                <b>OR</b>
                                            </Divider>
                                            <Divider layout="horizontal" class="!flex md:!hidden" align="center">
                                                <b>OR</b>
                                            </Divider>
                                        </div>

                                        <div class="col-span-5 flex justify-center"
                                            v-if="isAccountHolder == 'yes' ? true : false">
                                            <Button label="Fetch Bank Statement" backgroundColor="var(--primary-color)"
                                                name="fetchBankStatementButton"
                                                @button-on-click="fetchBankStatementButton" />
                                        </div>
                                    </div>

                                </fieldset>

                                <fieldset class="mt-4">

                                    <div class="section-header">
                                        <h3>Passport Photograph</h3>
                                    </div>
                                    <div class="grid grid-cols-12 gap-4 mb-4 items-center">
                                        <!-- Upload -->
                                        <div class="col-span-5">
                                            <FileUpload name="takePhotoSelfEmployed" label="Take Photo"
                                                icon="pi pi-camera" :showDragFileText=false
                                                @file-selected="handleFile" />
                                        </div>

                                        <!-- OR Divider -->
                                        <div class="col-span-2 flex justify-center">
                                            <Divider layout="vertical" class="!hidden md:!flex">
                                                <b>OR</b>
                                            </Divider>
                                            <Divider layout="horizontal" class="!flex md:!hidden" align="center">
                                                <b>OR</b>
                                            </Divider>
                                        </div>

                                        <div class="col-span-5">
                                            <FileUpload name="uploadFromGallerySelfEmployed" label="Upload from Gallery"
                                                icon="pi pi-image" @file-selected="handleFile" />
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset class="mt-4">
                                    <div class="section-header">
                                        <h3>Business Proof</h3>
                                    </div>
                                    <div class="grid grid-cols-12 gap-4 mb-4 items-center">
                                        <!-- Upload -->
                                        <div class="col-span-5">
                                            <FileUpload name="uploadDocumentSelfEmployed" label="Upload"
                                                icon="pi pi-receipt" @file-selected="handleFile" />
                                        </div>

                                        <!-- OR Divider -->
                                        <div class="col-span-2 flex justify-center">
                                            <Divider layout="vertical" class="!hidden md:!flex">
                                                <b>OR</b>
                                            </Divider>
                                            <Divider layout="horizontal" class="!flex md:!hidden" align="center">
                                                <b>OR</b>
                                            </Divider>
                                        </div>

                                        <div class="col-span-5">
                                            <FileUpload name="anyOtherDocumentSelfEmployed"
                                                label="Any other document required by Bank" icon="pi pi-plus"
                                                @file-selected="handleFile" />
                                        </div>
                                    </div>
                                </fieldset>

                            </div>
                            <!-- //////////////////////////////// -->

                        </fieldset>
                        <fieldset>
                            <div class="grid grid-cols-12 gap-4">
                                <div class="col-span-11" :lg="21"></div>
                                <div class="col-span-1" :lg="3">
                                    <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                        @button-on-click="nextButtonDocuments" />
                                </div>
                            </div>
                        </fieldset>
                    </AccordionContent>
                </AccordionPanel>
            </div>
            <div v-if="coApplicant" class="p-4 mb-8 bg-white rounded-xl border border-gray-200">
                <AccordionPanel v-if="coApplicant" value="8" ref="panel8">
                    <AccordionHeader>9. Co-applicant Details</AccordionHeader>
                    <AccordionContent>

                        <!-- //////////////////////////////// -->
                        <fieldset class="mt-4">
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <h4>
                                        <b>Do you have a co-Applicant also? <span class="text-red-600">*</span> </b>
                                    </h4>
                                </div>
                                <div class="col-span-4">
                                    <RadioButton name="coApplicantRadioButton" :options=RadioBtnYesNoList
                                        :modelValue=coApplicantValue label=""
                                        @radio-button-on-change="coApplicantRadioButtonOnChange" />
                                </div>
                            </div>

                            <!-- //////////////////////////////// -->
                            <div v-if="coApplicantValue == 'yes' ? true : false">
                                <div class="grid grid-cols-12 gap-4 mb-4">
                                    <div class="col-span-3">
                                        <TextBox name="nameCoApplicantTextBox" label="Name"
                                            dataType="alphabetsNumericSpecial" maxLength=30 :mandatory=true
                                            :modelValue=nameCoApplicant @text-box-on-key-up="nameCoApplicantTextBox" />
                                    </div>
                                    <div class="col-span-3">
                                        <TextBox name="mobileCoApplicantTextBox" label="Mobile" mask="****-*******"
                                            dataType="numericDashes" maxLength=12 :mandatory=true
                                            :modelValue=mobileCoApplicant
                                            @text-box-on-key-up="mobileCoApplicantTextBox" />
                                    </div>
                                    <div class="col-span-3">
                                        <TextBox name="emailCoApplicantTextBox" label="Email"
                                            dataType="alphaNumericSpecial" maxLength=30 :mandatory=true
                                            :modelValue=emailCoApplicant
                                            @text-box-on-key-up="emailCoApplicantTextBox" />
                                    </div>
                                    <div class="col-span-2" :lg="3">
                                        <Button label="Send Invite" backgroundColor="var(--primary-color)"
                                            name="NextButton" :isDisabled="isSendInviteButtonDisabled"
                                            @button-on-click="sendInviteButton" />
                                    </div>
                                </div>
                                <div class="grid grid-cols-12 gap-4 mb-4">
                                    <div class="col-span-10" :lg="3">
                                        <coApplicantGrid :list="coApplicantList" />
                                    </div>
                                </div>
                                <!-- <div class="grid grid-cols-12 gap-4 mb-4">
                            <div :lg="18" class="col-span-4"
                                <Button label="Add New" backgroundColor="var(--primary-color)" name="AddNewButton"
                                    icon="pi-plus" @button-on-click="addNewCoApplicant" />
                            </div>
                        </div> -->
                            </div>
                            <!-- //////////////////////////////// -->

                        </fieldset>
                        <fieldset>
                            <div class="grid grid-cols-12 gap-4">
                                <div class="col-span-11" :lg="21"></div>
                                <div class="col-span-1" :lg="3">
                                    <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                        :isDisabled="isNextButtonCoApplicantsDisabled"
                                        @button-on-click="nextButtonCoApplicant" />
                                </div>
                            </div>
                        </fieldset>
                    </AccordionContent>
                </AccordionPanel>
            </div>
            <div v-if="branchSelection" class="p-4 mb-8 bg-white rounded-xl border border-gray-200">
                <AccordionPanel v-if="branchSelection" value="9" ref="panel9">
                    <AccordionHeader>10. Branch Selection</AccordionHeader>
                    <AccordionContent>

                        <!-- //////////////////////////////// -->
                        <fieldset class="mt-4">
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="accountTitleBranchSelectionTextBox" label="Account Title"
                                        dataType="alphaNumericSpecial" maxLength=30 :mandatory=false
                                        :modelValue=accountTitleBranchSelection />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="accountNoBranchSelectionTextBox" label="Account Number"
                                        mask="****-****-******-**-*" dataType="numericDashes" maxLength=30
                                        :mandatory=false :modelValue=accountNoBranchSelection />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="BranchTextBox" label="Branch" dataType="alphaNumericSpecial"
                                        maxLength=30 :mandatory=false :modelValue=Branch />
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <h4>
                                        <b>Select Another Branch For Loan</b>
                                    </h4>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-12">

                                    <label>Do you want to select another branch or use your preferred branch? <span
                                            class="text-red-600">*</span> </label>

                                </div>
                            </div>

                            <div>
                                <RadioButton name="branchRadioButton" :options=branchList :modelValue=branchValue
                                    label="" @radio-button-on-change="branchOnChange" />
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4"
                                v-if="branchValue == 'currentBranch' ? false : true">
                                <div class="col-span-4">
                                    <Dropdown name="selectedCityDropDown" label="Select City" :mandatory=false
                                        :modelValue=selectedCity :optionsList=selectedCityList />
                                </div>
                                <div class="col-span-4">
                                    <Dropdown name="selectedAreaDropDown" label="Select Area" :mandatory=false
                                        :modelValue=selectedArea :optionsList=selectedAreaList />

                                </div>
                                <div class="col-span-4">
                                    <Dropdown name="selectedBranchDropDown" label="Select Branch" :mandatory=false
                                        :modelValue=selectedBranch :optionsList=selectedBranchList />

                                </div>
                            </div>

                            <!-- //////////////////////////////// -->

                        </fieldset>
                        <fieldset>
                            <div class="grid grid-cols-12 gap-4">
                                <div class="col-span-11" :lg="21"></div>
                                <div class="col-span-1" :lg="3">
                                    <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                        @button-on-click="nextButtonBranchSelection" />
                                </div>
                            </div>
                        </fieldset>
                    </AccordionContent>
                </AccordionPanel>
            </div>
            <div v-if="cf1Form" class="p-4 mb-8 bg-white rounded-xl border border-gray-200">
                <AccordionPanel v-if="cf1Form" value="10" ref="panel10">
                    <AccordionHeader>11. CF-1 Form</AccordionHeader>
                    <AccordionContent>

                        <!-- //////////////////////////////// -->
                        <fieldset class="mt-4">
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-12">
                                    <h4>
                                        <b>Details of Credit Cards (Clean) limits being availed from other banks /
                                            DFIs</b>
                                    </h4>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div :lg="12" class="col-span-4">
                                    <TextBox name="cleanCreditCardBankNameTextBox" label="Name of the Bank"
                                        dataType="alphaNumericSpecial" maxLength=45 :mandatory=false
                                        :modelValue=cleanCreditCardBankName
                                        @text-box-on-key-up="cleanCreditCardBankNameTextBox" />
                                </div>
                                <div :lg="12" class="col-span-4">
                                    <TextBox name="cleanCreditCardApprovedLimitTextBox" label="Approved Limit"
                                        dataType="alphaNumericSpecial" maxLength=45 :mandatory=false
                                        :modelValue=cleanCreditCardApprovedLimit
                                        @text-box-on-blur="AccountNumberTextBox" />
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-12">
                                    <h4>
                                        <b>Details of Credit Cards (Secured) limits being availed from other banks /
                                            DFIs</b>
                                    </h4>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div :lg="12" class="col-span-4">
                                    <TextBox name="securedCreditCardBankNameTextBox" label="Name of the Bank"
                                        dataType="alphaNumericSpecial" maxLength=45 :mandatory=false
                                        :modelValue=securedCreditCardBankName
                                        @text-box-on-blur="cleanCreditCardBankNameTextBox" />
                                </div>
                                <div :lg="12" class="col-span-4">
                                    <TextBox name="securedCreditCardApprovedLimitTextBox" label="Approved Limit"
                                        dataType="alphaNumericSpecial" maxLength=45 :mandatory=false
                                        :modelValue=securedCreditCardApprovedLimit
                                        @text-box-on-blur="AccountNumberTextBox" />
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-12">
                                    <h4>
                                        <b>Details of Personal Loan (Clean) limits being availed from other banks /
                                            DFIs</b>
                                    </h4>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="cleanPersonalLoanBankNameTextBox" label="Name of the Bank"
                                        dataType="alphaNumericSpecial" maxLength=45 :mandatory=false
                                        :modelValue=cleanPersonalLoanBankName
                                        @text-box-on-blur="cleanCreditCardBankNameTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="cleanPersonalLoanApprovedLimitTextBox" label="Approved Limit"
                                        dataType="alphaNumericSpecial" maxLength=45 :mandatory=false
                                        :modelValue=cleanPersonalLoanApprovedLimit
                                        @text-box-on-blur="AccountNumberTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="cleanPersonalLoanOutstandingAmountTextBox"
                                        label="Amount Outstanding on Application Date" dataType="alphaNumericSpecial"
                                        maxLength=45 :mandatory=false :modelValue=cleanPersonalLoanOutstandingAmount
                                        @text-box-on-blur="cleanCreditCardBankNameTextBox" />
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-12">
                                    <h4>
                                        <b>Details of Personal Loan (Secured) limits being availed from other banks /
                                            DFIs</b>
                                    </h4>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="securedPersonalLoanBankNameTextBox" label="Name of the Bank"
                                        dataType="alphaNumericSpecial" maxLength=45 :mandatory=false
                                        :modelValue=securedPersonalLoanBankName
                                        @text-box-on-blur="cleanCreditCardBankNameTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="securedPersonalLoanApprovedLimitTextBox" label="Approved Limit"
                                        dataType="alphaNumericSpecial" maxLength=45 :mandatory=false
                                        :modelValue=securedPersonalLoanApprovedLimit
                                        @text-box-on-blur="AccountNumberTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="securedPersonalLoanOutstandingAmountTextBox"
                                        label="Amount Outstanding on Application Date" dataType="alphaNumericSpecial"
                                        maxLength=45 :mandatory=false :modelValue=securedPersonalLoanOutstandingAmount
                                        @text-box-on-blur="cleanCreditCardBankNameTextBox" />
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-12">
                                    <h4>
                                        <b>Details of other facilities if any (Clean & Secured) being availed from other
                                            banks /
                                            DFIs</b>
                                    </h4>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-3">
                                    <TextBox name="otherFacilitiesBankNameTextBox" label="Name of the Bank"
                                        dataType="alphaNumericSpecial" maxLength=45 :mandatory=false
                                        :modelValue=otherFacilitiesBankName
                                        @text-box-on-blur="cleanCreditCardBankNameTextBox" />
                                </div>
                                <div class="col-span-3">
                                    <TextBox name="otherFacilitiesApprovedLimitTextBox" label="Approved Limit"
                                        dataType="alphaNumericSpecial" maxLength=45 :mandatory=false
                                        :modelValue=otherFacilitiesApprovedLimit
                                        @text-box-on-blur="cleanCreditCardBankNameTextBox" />
                                </div>
                                <div class="col-span-3">
                                    <Dropdown name="natureOfFacilityDropDown"
                                        label="Nature of Facility (Clean / Secured)" :mandatory=false
                                        :modelValue=natureOfFacility :optionsList=natureOfFacilityList />
                                </div>
                                <div class="col-span-3">
                                    <TextBox name="otherFacilitiesOutstandingAmountTextBox"
                                        label="Amount Outstanding on Application Date" dataType="alphaNumericSpecial"
                                        maxLength=45 :mandatory=false :modelValue=otherFacilitiesOutstandingAmount
                                        @text-box-on-blur="cleanCreditCardBankNameTextBox" />
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-12">
                                    <h4>
                                        <b>Applied Limits (including the application in process)</b>
                                    </h4>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <TextBox name="appliedLimitsBankNameTextBox" label="Name of the Bank"
                                        dataType="alphaNumericSpecial" maxLength=45 :mandatory=false
                                        :modelValue=appliedLimitsBankName
                                        @text-box-on-blur="cleanCreditCardBankNameTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <TextBox name="appliedLimitsFacilityUnderProcessTextBox"
                                        label="Facility under Process" dataType="numeric" maxLength=45 :mandatory=false
                                        :modelValue=appliedLimitsFacilityUnderProcess
                                        @text-box-on-blur="cleanCreditCardBankNameTextBox" />
                                </div>
                                <div class="col-span-4">
                                    <Dropdown name="appliedLimitsnatureOfFacilityDropDown"
                                        label="Nature of Facility (Clean / Secured)" :mandatory=false
                                        :modelValue=appliedLimitsnatureOfFacility
                                        :optionsList=appliedLimitsnatureOfFacilityList />
                                </div>
                            </div>
                            <!-- //////////////////////////////// -->

                        </fieldset>
                        <fieldset>
                            <div class="grid grid-cols-12 gap-4">
                                <div class="col-span-11" :lg="21"></div>
                                <div class="col-span-1" :lg="3">
                                    <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                        @button-on-click="nextButtonCF1Form" />
                                </div>
                            </div>
                        </fieldset>
                    </AccordionContent>
                </AccordionPanel>
            </div>
            <div v-if="reviewAndVerify" class="p-4 mb-8 bg-white rounded-xl border border-gray-200">
                <AccordionPanel v-if="reviewAndVerify" value="11" ref="panel11">
                    <AccordionHeader>12. Review & Verify</AccordionHeader>
                    <AccordionContent>

                        <!-- //////////////////////////////// -->
                        <fieldset class="mt-4">
                            <div class="section-header">
                                <h3>Letter of Understanding</h3>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-10">
                                    <p>
                                        Reference to my application of Auto Finance Facility from the Bank,
                                        I hereby acknowledge and confirm that:
                                    </p>
                                    <br>
                                    <ul class="list-disc list-outside pl-5 space-y-1">
                                        <li>
                                            The applicable IRR (Internal Rate of Return) on the Facility is 2%, which
                                            shall be
                                            fixed for
                                            the entire tenure of Facility. (For fixed markup mode)
                                        </li>
                                    </ul>

                                    <p class="ml-4">OR</p>

                                    <ul class="list-disc list-outside pl-5 space-y-1 text-justify">
                                        <li>
                                            Applicable Floating Rate on the facility is 1 YR KIBOR (Base Rate) plus
                                            1.50%
                                            (Spread).
                                            Base Rate shall be reviewed on the last business day of the previous Base
                                            Period.
                                            (For floating markup mode)
                                        </li>
                                        <li>
                                            Upon approval of the facility, I shall provide post dated cheques/debit
                                            authority
                                            for the
                                            repayments of my monthly installments to the bank.
                                        </li>
                                        <li>
                                            Processing Fee of Rs. 2000/- shall be paid by me to the bank.
                                        </li>
                                        <li>
                                            My 1st total monthly installment may vary from the repayment schedule which
                                            shall be
                                            based
                                            on the date of the disbursement. Furthermore, I understand that if the
                                            facility is
                                            disbursed
                                            before 16th of the month my 1st monthly installment shall be due on the 1st
                                            of the
                                            following month.
                                        </li>
                                        <li>
                                            Installation of tracking device (if applicable) is solely being arranged by
                                            the
                                            insurance
                                            company which is selected with my consent.
                                        </li>
                                        <li>
                                            I am aware that the change in price and delivery of financed vehicle is the
                                            sole
                                            discretion
                                            of manufacturer/distributor which is selected with my consent.
                                        </li>
                                        <li>
                                            I am aware that after disbursement of the facility, if there is any change
                                            in the
                                            vehicle price,
                                            it shall be borne by me, as and when demanded by the
                                            manufacturer/distributor.
                                        </li>
                                        <li>
                                            I am also aware that financed vehicle shall be covered under comprehensive
                                            insurance
                                            policy
                                            at the price mentioned in the Offer Letter.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="section-header">
                                <h3>Terms & Conditions</h3>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-10">
                                    <p>I/We hereby apply for Customer Finance(Facility) from Bank AL Habib
                                        Limited(BAHL), as indicated in this application.</p>
                                    <p>I/We undertake that this Facility will be utilized for personal use only.</p>
                                    <br>
                                    <p>We acknowledge and confirm that:</p>

                                    <ol class="list-decimal list-outside pl-8 space-y-1">
                                        <li>No legal proceedings have been threatened or commenced or underway against
                                            me/us.
                                        </li>

                                        <li>
                                            All information furnished by me/us in this application is true, complete and
                                            accurate and I/We have not withheld any material fact.
                                        </li>

                                        <li>
                                            The references whose particulars are mentioned in the Application Form are
                                            aware of
                                            this transaction and will oblidge BAHL for confirmation of the same.
                                        </li>

                                        <li>
                                            The Facility will be provided subject to the terms and conditions contained in the
                Offer Letter (if issued by BAHL) and/or the Facility.
                                        </li>

                                        <li>
                                             I/We hereby authorize you to obtain information/data regarding my/our financial and personal details from any credit bureau, agent, banks, financial institutions, or companies for the purposes of processing my application and monitoring my facilities/account. Further, I/we authorize you to disclose and share the information in connection with my application with any other credit bureau, agent, banks, financial institutions or companies as you BAHL considers appropriate from time to time in accordance with the Applicable Laws.
                                        </li>

                                        <li>
                                            I/We acknowledge the fact that the Facility requested by me/us in this application will be made available to me/us at the absolute discretion of BAHL and Bank Al Habib Limited reserves the rights to reject this application without assigning any reason, whatsoever.
                                        </li>

                                        <li>
                                            I/We indemnify and agree to hold BAHL indemnified and harmless against any loss, damage, costs and expenses, fees, claims and proceedings, which may be incurred or sustained by BAHL or claimed against BAHL as a result of a breach of these terms and conditions by me/us or any information provided or representation made by me/us in this application form being incorrect or untrue or any discrepancy in my/our signature on this application form and I/we hereby undertake to pay to BAHL the amount demanded by BAHL pursuant to this indemnity within [7] working days of the first written demand of BAHL.
                                        </li>

                                        <li>
                                            The applicable IRR (Internal Rate of Return) on the Facility is __________ %, which shall be fixed for the entire tenure of Facility. (For fixed markup mode).

<p class="ml-4">
                                                    OR
                                                </p>

Applicable Floating Rate on the facility is __________ KIBOR (Base Rate) plus __________ % (Spread). Base Rate shall be reviewed on the last business day of the previous Base Period. (For floating markup mode).
                                        </li>

                                        <li>
                                            Upon approval of the facility, I shall provide post dated cheques/debit authority for the repayments of my monthly installments to the bank.
                                        </li>

                                        <li>
                                            Processing Fee of Rs. __________ shall be paid by me to the bank.
                                        </li>

                                        <li>
                                            My/Our 1st total monthly installment may vary from the repayment schedule which shall be based on the date of the disbursement. Furthermore, I/we understand that if the facility is disbursed before 16th of the month my/our 1st monthly installment shall be due on the 1st of the following month.
                                        </li>

                                        <li>Installation of tracking device (if applicable) is solely being arranged by the insurance company which is selected with my consent.*
                                        </li>

                                        <li>
                                            I/We am/are aware that the change in price and delivery of financed vehicle is the sole discretion of manufacturer/distributor which is selected with my/our consent.*
                                        </li>

                                        <li>
                                            I/We am/are well aware that after disbursement of the facility, if there is any change in the vehicle price, it shall be borne by me/us, and as when demanded by the manufacturer/distributor.*
                                        </li>

                                        <li>
                                            I/We am/are also aware that financed vehicle shall be covered under insurance policy at the price mentioned in the Offer Letter.*
                                        </li>

                                        <li>
                                           I/We will use and operate the motor vehicle (Motor Vehicle) financed by Bank AL Habib Ltd.(Bank) under the aforesaid undertaking for personal use only.*
                                        </li>

                                        <li>
                                           I/We will not use, operate or give the Motor Vehicle for rental purposes, on lease, hire-purchase or any other purpose in violation of the aforesaid purpose.*</li>

                                        <li>
                                           I/We will not sell or transfer any rights, interests, assign, hypothecate or in any manner create any encumbrance on the Motor Vehicle.*
                                        </li>

                                        <li>
                                            I/We will not utilize my Personal Finance Facility for the purpose of IPO and will utilize this facility only for the reason mentioned in my application. No cheques, drafts and/or any payment instructions will be made by me/us for IPO subscription from my saving/ current account sanctioned for the disbursement of aforesaid facility.*
                                        </li>

                                        <li>
                                            NOW THEREFORE, in consideration of the Bank agreeing to provide/ having provided finances to me under the aforesaid agreement, I/we hereby undertake to indemnify and keep the Bank indemnified, safe and harmless at all times and from time to time from and against all losses, damages, penalties, fines (including but not limited to any loss arising from a violation of the undertaking specified at above), actions, suits, proceedings, accounts, claims, liabilities, expenses, costs and fees which the Bank may incur, sustain or be put to by reason or on account of the Bank having extended the said finances to me/us.
                                        </li>

                                        <li>
                                            I/we hereby authorize the bank to update CIF related information appearing in the above form across all the accounts maintained by me with Bank AL Habib Limited as per bank’s policy.
                                        </li>
                                    </ol>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-10">
                                    <p>
                                        Bank AL Habib Limited has always provided financial products with a customer-centric approach, keeping the interests of its customers at the forefront. Under the “Financial Consumer Protection Framework” being devised in the country, your bank has launched a Consumer Protection policy, of which one part pertains to the roles & responsibilities of the consumer. 
                                    </p>
<br>
                                    <p>
                                        The salient points are:
                                    </p>
                                    <br>

                                    <ol class="list-decimal list-outside pl-5 space-y-1">
                                        <li>
                                            <b>Be Honest with the Information Provided:</b><p>
Customers are required to provide full and accurate information when filling in any bank documents and must not give false details or leave out important information.
                                       </p> </li>

                                        <li>
                                            <b>Read all the Information Provided by the Bank:</b><p>
Customers are encouraged and requested to read all the information provided by the bank at the time of establishing a relationship for their own benefit.
                                       </p> </li>

                                        <li>
                                            <b>Ask Questions for Clarity:</b><p>
Customers are encouraged to ask questions from the bank’s representatives / staff about anything that is unclear or any conditions that they are unsure about. The staff will answer any question in a professional manner to help customers in their decision making.
                                        </p></li>

                                        <li>
                                            <b>Know How to Make a Complaint:</b><p>
Bank will provide customers with details on how to lodge a complaint. Customer can proactively using this service and know how to escalate the complaint to higher levels and if required involve the Banking Ombudsman and the Consumer Protection Department of the State Bank of Pakistan.</p>
                                        </li>

                                        <li>
                                            <b>Use the Product or Service In-line with the Terms and Conditions:</b><p>
Customer should not use the product or service, except in accordance with the terms and conditions associated with them and only after the customer has complete knowledge of the given product or service.
                                       </p> </li>

                                        <li>
                                            <b>Report Unauthorized Transactions to the Bank:</b><p>
If any customer discovers unauthorized transactions on his/her account, he/she should report this to the bank immediately. The mechanisms of reporting are clearly enunciated in the bank’s Statement of Accounts.
                                        </p></li>

                                        <li>
                                            <b>Do not Disclose Banking Information:</b><p>
Under no circumstances should the customer provide any bank account details or other sensitive personal or financial information to any third party.
                                        </p></li>

                                        <li>
                                            <b>Update Information:</b><p>
Customer should update their personal contact information so that it is updated continuously and also when requested by the bank. Mechanisms are clearly elaborated to do the same.
                                        </p></li>

                                        <li>
                                            <b>Keep Copies of Documents:</b><p>
Customers are expected to retain their own records of important documents so that they are fully conversant with the bank and their own roles and responsibilities in a transaction/ relationship.
                                       </p> </li>

                                        <li>
                                            <b>Do not Sign Incomplete Forms:</b><p>
Customer should make sure that all of the required fields and numbers are completed in a form that is presented to them for signing and under no circumstances should the customer sign a blank or partially completed form.
                                        </p></li>
                                        <li>
                                           <b> Fulfill obligations and make payments on time:</b><p>
Customers must fulfill all obligations they have to the bank, including timely payment of all dues, charges and loan installments. In case of breach of contract, customers are bound by the terms and conditions duly signed by them at initiation of relationship or later amendments, duly informed to them from time to time.
                                        </p></li>
                                    </ol>
                                    <br>
                                    <p>
                                        We hope that this initiative will nourish a consumer-friendly banking environment that would cater to the needs of Al Habi
                                    </p>

                                    <p>
                                        We look forward to providing the best of the Bank culture and enhance financial
                                        inclusion in
                                        the banking sector.
                                    </p>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-10">
                                    <!-- <div class="flex flex-col gap-4 mb-4"> -->
                                    <Checkbox name="undertaking1CheckBox"
                                        chekboxLabel="I / We hereby apply for Consumer Finance (Facility) from the Bank as indicated in this application."
                                        :mandatory=false chekboxLabelColor=var(--primary-dark) :modelValue=undertaking1
                                        chekboxLabelFontWeight="bold" @update:modelValue="undertaking1CheckBox" />
                                    <!-- </div> -->
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-10">
                                    <!-- <div class="flex flex-col gap-4 mb-4"> -->
                                    <Checkbox name="undertaking2CheckBox" chekboxLabelColor=var(--primary-dark)
                                        chekboxLabel="I / We undertake that this Facility will be utilized for
                                    Personal Use Only." :mandatory=false chekboxLabelFontWeight="bold"
                                        :modelValue=undertaking2 @update:modelValue="undertaking2CheckBox" />
                                    <!-- </div> -->
                                </div>
                            </div>
                            <!-- //////////////////////////////// -->

                        </fieldset>
                        <fieldset>
                            <div class="grid grid-cols-12 gap-4">
                                <div class="col-span-11" :lg="21"></div>
                                <div class="col-span-1" :lg="3">
                                    <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                        :isDisabled="isNextButtonReviewAndVerifyDisabled"
                                        @button-on-click="nextReviewAndVerify" />
                                </div>
                            </div>
                        </fieldset>
                    </AccordionContent>
                </AccordionPanel>
            </div>
            <div v-if="underTaking" class="p-4 mb-8 bg-white rounded-xl border border-gray-200">
                <AccordionPanel v-if="underTaking" value="12" ref="panel12">
                    <AccordionHeader>13. UnderTaking & Submission</AccordionHeader>
                    <AccordionContent>

                        <!-- //////////////////////////////// -->
                        <fieldset class="mt-4">
                            <Tabs value=0 class="mt-4">
                                <TabList class="flex gap-0.8">
                                    <Tab style="min-width:12rem" class="custom-tab" value=0>Physical Signature
                                    </Tab>
                                    <Tab style="min-width:12rem" class="custom-tab" value=1>E-Signature</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel value=0>
                                        <div class="grid grid-cols-12 gap-4 mb-4">
                                            <div class="col-span-1" :lg="1">
                                            </div>
                                            <div class="col-span-11" :lg="23">
                                                <label>
                                                    You have successfully completed your loan application form.
                                                    Please <strong>download</strong> the form,
                                                    <strong>print it</strong>, <strong>sign the physical copy</strong>,
                                                    and then <strong>upload the scanned signed document</strong>.
                                                </label>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-12 gap-4 mb-4">
                                            <div class="col-span-5" :lg="10"></div>
                                            <div class="col-span-2" :lg="3">
                                                <Button label="Download Form" backgroundColor="var(--primary-color)"
                                                    name="DownloadFormButton" @button-on-click="downloadForm" />
                                            </div>
                                        </div>

                                        <div class="mt-5 w-full border-t border-gray-200"></div>

                                        <!-- Upload -->
                                        <div>
                                            <div class="col-span-6"></div>
                                            <div class="col-span-5">
                                                <h3>
                                                    <strong>Please Upload Scanned Signed Document</strong>
                                                </h3>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-12 gap-4">
                                            <div class="col-span-3"></div>
                                            <div class="col-span-6">
                                                <FileUpload name="uploadDocumentSelfEmployed" label=""
                                                    icon="pi pi-file-pdf" @file-selected="handleFile" />
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value=1>
                                        <div class="esign-header">
                                            <div>
                                                <h2>Reference ID: APJ22545566</h2>
                                                <p>User Name | Auto Loan</p>
                                            </div>
                                            <span>
                                                Date: 12/12/2025 12:00 AM
                                            </span>
                                        </div>


                                        <!-- Loan Info -->
                                        <fieldset class="mb-4 mt-4">
                                            <div class="grid grid-cols-12 gap-4 mb-4">
                                                <div class="col-span-2">
                                                    <Label name="loanAmountLabel" label="Loan Amount:"
                                                        labelFontWeight="bold" />
                                                </div>
                                                <div class="col-span-2">
                                                    <Label name="loanAmountValueLabel" label="100,000"
                                                        labelColor="gray" />
                                                </div>
                                                <div class="col-span-3"></div>
                                                <div class="col-span-2">
                                                    <Label name="interestRateLabel" label="Interest Rate:"
                                                        labelFontWeight="bold" />
                                                </div>
                                                <div class="col-span-2">
                                                    <Label name="interestRateValueLabel" label="8.5%"
                                                        labelColor="gray" />
                                                </div>
                                            </div>
                                            <div class="grid grid-cols-12 gap-4 mb-4">
                                                <div class="col-span-2">
                                                    <Label name="loanPeriodLabel" label="Loan Period:"
                                                        labelFontWeight="bold" />
                                                </div>
                                                <div class="col-span-2">
                                                    <Label name="loanPeriodValueLabel" label="36 months"
                                                        labelColor="gray" />
                                                </div>
                                                <div class="col-span-3"></div>
                                                <div class="col-span-2">
                                                    <Label name="MonthlyRepaymenteLabel" label="Monthly Repayment:"
                                                        labelFontWeight="bold" />
                                                </div>
                                                <div class="col-span-2">
                                                    <Label name="MonthlyRepaymenteValueLabel" label="3167.4"
                                                        labelColor="gray" />
                                                </div>
                                            </div>
                                            <div class="grid grid-cols-12 gap-4 mb-4">
                                                <div class="col-span-2">
                                                    <Label name="totalRepaymentLabel" label="Total Repayment:"
                                                        labelFontWeight="bold" />
                                                </div>
                                                <div class="col-span-2">
                                                    <Label name="totalRepaymentValueLabel" label="114,026.4"
                                                        labelColor="gray" />
                                                </div>
                                                <div class="col-span-3"></div>
                                                <div class="col-span-2">
                                                    <Label name="outstandingBalanceLabel" label="Outstanding Balance:"
                                                        labelFontWeight="bold" />
                                                </div>
                                                <div class="col-span-2">
                                                    <Label name="outstandingBalanceValueLabel" label="63,348"
                                                        labelColor="gray" />
                                                </div>
                                            </div>
                                        </fieldset>
                                        <!-- Signature Area -->
                                        <div class="grid grid-cols-12 gap-4 mb-4">
                                            <div class="col-span-12">
                                                <div class="font-bold  my-4 h-px w-full text-[var(--primary-color)]">

                                                    <i class="pi pi-pen-to-square" />
                                                    <span class="ml-1"> E-Signature</span>

                                                </div>
                                            </div>
                                        </div>

                                        <TabView v-model:activeIndex="activeSubTab">
                                            <!-- <TabPanel header="Draw">
                                    <div class="signature-pad">
                                        <p class="placeholder">Signature canvas here</p>
                                    </div>
                                </TabPanel> -->

                                            <TabPanel header="Type">
                                                <!-- <el-input placeholder="Type your signature" /> -->
                                                <TextBox name="TypeyourSignatureTextBox" label="Type your signature"
                                                    dataType="alphaNumericSpecial" maxLength=45 :mandatory=true
                                                    :modelValue=TypeyourSignatureTextBox
                                                    @text-box-on-blur="TypeyourSignatureTextBoxonBlur" />
                                            </TabPanel>

                                            <TabPanel header="Upload">
                                                <div class="grid grid-cols-12 gap-4">
                                                    <div class="col-span-3"></div>
                                                    <div class="col-span-6">
                                                        <FileUpload name="signatureImage" label="Upload signature image"
                                                            icon="pi pi-file-pdf" @file-selected="handleFile" />
                                                    </div>
                                                </div>
                                            </TabPanel>
                                        </TabView>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                            <!-- Tabs -->
                        </fieldset>
                    </AccordionContent>
                    <fieldset>
                        <div class="grid grid-cols-12 gap-4">

                            <div class="col-span-1" :lg="3">
                                <Button label="Cancel" backgroundColor="var(--primary-color)" name="cancelButton"
                                    @button-on-click="CancelForm" />
                            </div>
                            <div class="col-span-10" :lg="18">
                            </div>
                            <div class="col-span-1" :lg="3">
                                <Button label="Sumbit" backgroundColor="var(--primary-color)" name="submitButton"
                                    @button-on-click="SubmitForm" />
                            </div>
                        </div>
                    </fieldset>
                </AccordionPanel>
            </div>




        </Accordion>
        <!-- //////// -->
        <div v-if="successDialog" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 ">
            <!-- Modal -->
            <div class="w-full max-w-[450px] min-h-[250px] rounded-xl bg-white shadow-xl mt-[50px]">
                <div class="relative px-6 pt-2 pb-6 text-center">

                    <!-- Success Icon -->
                    <div class="relative flex flex-col items-center px-6 py-2 text-center">
                        <div
                            class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary-color)]">
                            <svg width="32" height="24" viewBox="0 0 16 12" fill="none">
                                <path d="M1 6L6 11L15 1" stroke="white" stroke-width="2" />
                            </svg>
                        </div>
                    </div>
                    <!-- Title -->
                    <h2 class="mb-2 text-lg font-semibold text-[var(--primary-color)]">
                        Loan Application Submitted Successfully.
                    </h2>

                    <!-- Description -->
                    <p class="mb-6 text-sm leading-relaxed text-gray-700">
                        Please check your <strong>email</strong>, we've also sent
                        <strong>Reference ID</strong> to your provided email.
                        <br />
                        Please follow the instructions to confirm your registration,
                        activate your account, and complete your application process successfully.
                    </p>

                    <!-- OK Button -->
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4"></div>
                        <div class="col-span-4">
                            <Button label="OK" backgroundColor="var(--primary-color)" name="okButton"
                                @button-on-click="handleOk" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, defineAsyncComponent, watch, computed } from "vue";
import { Button, Checkbox, TextBox, TextArea, Dropdown, Label, RadioButton, FileUpload } from '@cms/ui-components';

import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import coApplicantGrid from "../components/coApplicantGrid.vue";
import InputOtp from 'primevue/inputotp';

import { useRouter } from 'vue-router'
const router = useRouter();
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import TabPanels from 'primevue/tabpanels';
import Tab from 'primevue/tab';
// import axios from 'axios';
const resetter = (() => {
    const trackedRefs = []; // store all refs with initial values

    return {
        // replacement for ref()
        ref(initialValue) {
            const r = ref(initialValue);
            trackedRefs.push({ r, initialValue }); // track it
            return r;
        },

        // reset all tracked refs
        resetState() {
            trackedRefs.forEach(({ r, initialValue }) => {
                r.value = initialValue;
            });
        }
    };
})();
//////////////////////////
const panel0 = resetter.ref(null);
const panel1 = resetter.ref(null);
const panel2 = resetter.ref(null);
const panel3 = resetter.ref(null);
const panel4 = resetter.ref(null);
const panel5 = resetter.ref(null);
const panel6 = resetter.ref(null);
const panel7 = resetter.ref(null);
const panel8 = resetter.ref(null);
const panel9 = resetter.ref(null);
const panel10 = resetter.ref(null);
const panel11 = resetter.ref(null);
const panel12 = resetter.ref(null);

const isNextButtonDisabled = computed(() => {
    if (isAccountHolder.value == 'yes') {
        if (accountNumberValue.value !== "")
            return false;
        else
            return true;
    }
    return false;
});
const accountNumberValue = resetter.ref('');
const AccountNumberTextBox = (event, val) => {
    accountNumberValue.value = val;
}
const mobileNoTextBox = (event, val) => {
    mobileNo.value = val;
}
const emailAddressTextBox = (event, val) => {
    emailAddress.value = val;
}
const timeLeft = resetter.ref(60); // 60 seconds = 1:00
let timer = null;

const isSendOTPButtonDisabled = computed(() => {
    return mobileNo.value == '' || emailAddress.value == '';
})
const verifyButtonDisabled = computed(() => {
    return InputOtpValue.value.toString().length == 6 ? false : true
})
const formattedTime = computed(() => {
    const minutes = Math.floor(timeLeft.value / 60);
    const seconds = timeLeft.value % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
});
const startTimer = () => {
    clearInterval(timer);
    timeLeft.value = 60;

    timer = setInterval(() => {
        if (timeLeft.value > 0) {
            timeLeft.value--;
        } else {
            clearInterval(timer);
        }
    }, 1000);
};
const onResendClick = () => {
    startTimer();
}
const IdentificationTypeDropDown = (val) => {
    identificationType.value = val?.value;
}
const cnicPassportNumberTextBox = (event, val) => {
    cnicNo.value = val;
}
const isFetchButtonDisabled = computed(() => {
    return identificationType.value == '' || cnicNo.value == "";
})
const isSendInviteButtonDisabled = computed(() => {
    return nameCoApplicant.value == '' || emailCoApplicant.value == '' || mobileCoApplicant.value == '' || nameCoApplicant.value == ' ' || emailCoApplicant.value == ' ' || mobileCoApplicant.value == ' ';
})
const isNextButtonAcPersonalDetailsDisabled = ref(true)
// computed(() => {
// return (purposeOfAccount.value == "" || accountCategory.value == "" || currency.value == "" || modeOfTransaction.value == "" || deliveryChannels.value == "" ||
//     highestBalance.value == "" || depositPerMonth.value == "" || NumberOfDepositPerMonth.value == "" || NumberOfWithdrawalPerMonth.value == "" || NumberOfWithdrawalPerMonth.value == "") ||
//     (TaxResidentCountry.value == 'yes' && (Country.value == '' || CRSTin.value == "" || Reason.value == ""))
// })
const isNextButtonAcPersonalDetailsExistingDisabled = ref(true)
// computed(() => {
// return (purposeOfAccount.value == "" || accountCategory.value == "" || currency.value == "" || modeOfTransaction.value == "" || deliveryChannels.value == "" ||
//     highestBalance.value == "" || depositPerMonth.value == "" || NumberOfDepositPerMonth.value == "" || NumberOfWithdrawalPerMonth.value == "" || NumberOfWithdrawalPerMonth.value == "") ||
//     (TaxResidentCountry.value == 'yes' && (Country.value == '' || CRSTin.value == "" || Reason.value == ""))
// })
const OTPFlag = resetter.ref(false);

//////////////////////////
const activeNames = resetter.ref(['0']);
const mobileNo = resetter.ref('');
const emailAddress = resetter.ref('');
const InputOtpValue = resetter.ref('');
const isAccountHolder = resetter.ref('yes');
const RadioBtnYesNoList = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' }
]
const identificationType = resetter.ref('');
const identificationTypesList = resetter.ref([
    { label: 'CNIC', value: 'CNIC' },
    { label: 'Passport', value: 'Passport' },
    { label: 'NICOP', value: 'NICOP' }
]);
const cnicNo = resetter.ref('');
const fullName = resetter.ref('');
const cnicIssueDate = resetter.ref('');
const cnicExpiryDate = resetter.ref('');
const ntnNumber = resetter.ref('');
const DobTextBox = resetter.ref('');
const salutationList = resetter.ref([{ label: 'Mr.', value: 'Mr.' },
{ label: 'Mrs.', value: 'Mrs.' },
{ label: 'Ms.', value: 'Ms.' }]);
const salutation = resetter.ref('');
const qualification = resetter.ref('');
const qualificationList = resetter.ref([{ label: 'Matric', value: 'Matric' },
{ label: 'Intermediate', value: 'Intermediate' },
{ label: 'Bachelor', value: 'Bachelor' }]);
const maritalStatus = resetter.ref('');
const maritalStatusList = resetter.ref([{ label: 'Single', value: 'Single' },
{ label: 'Married', value: 'Married' },
{ label: 'Divorced', value: 'Divorced' }]);
const fatherSpouseRadioBtn = resetter.ref('Father Name');
const fatherSpouseRadioBtnList = resetter.ref([{ label: 'Father Name', value: 'Father Name' },
{ label: 'Spouse Name', value: 'Spouse Name' }])
const motherName = resetter.ref('');
const dateOfBirth = resetter.ref('');
const fatherSpouseName = resetter.ref('');
const children = resetter.ref('');
const otherPhoneNo = resetter.ref('');
const otherDependent = resetter.ref('');
const nextOfKin = resetter.ref('');
const nextOfKinRelation = resetter.ref('');
const nextOfKinCnic = resetter.ref('');
const nextOfKinAddress = resetter.ref('');
const haveVehicle = resetter.ref('no');
const vehicleModel = resetter.ref('');
const vehicleStatus = resetter.ref('');
const vehicleStatusList = resetter.ref([{ label: 'New', value: 'New' },
{ label: 'Old', value: 'Old' }]);
const bankModeOfCoomunication = resetter.ref('email');
const bankModeOfCoomunicationList = [
    { label: 'Email', value: 'email' },
    { label: 'Hard Copy', value: 'hardCopy' }
]
const purposeOfAccount = resetter.ref('');
const purposeOfAccountList = resetter.ref([{ label: 'Current', value: 'Current' },
{ label: 'Saving', value: 'Saving' }]);
const accountCategory = resetter.ref('');
const accountCategoryList = resetter.ref([{ label: 'Singly', value: 'Singly' },
{ label: 'Joint', value: 'Joint' }]);
const currency = resetter.ref('');
const currencyList = resetter.ref([{ label: 'Pakistani Rupees', value: 'Pakistani Rupees' },
{ label: 'U.S Dollars', value: 'U.S Dollars' }]);
const chequeBookRequired = resetter.ref('yes');
const estatementRequired = resetter.ref('yes');
const smsAlert = resetter.ref('yes');
const isPep = resetter.ref('yes');
const PepList = resetter.ref([
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
    { label: 'BY way of Association/Relationship', value: 'BY way of Association/Relationship' },
])
const salutationList2 = resetter.ref([{ label: 'Mr.', value: 'Mr.' },
{ label: 'Mrs.', value: 'Mrs.' },
{ label: 'Ms.', value: 'Ms.' }]);
const salutation2 = resetter.ref('');
const fullname2 = resetter.ref('');
const cnicNo2 = resetter.ref('');
const cnicIssueDate2 = resetter.ref('');
const cnicExpiryDate2 = resetter.ref('');
const modeOfTransaction = resetter.ref('');
const modeOfTransactionList = resetter.ref([{ label: 'Cash.', value: 'Cash.' },
{ label: 'Online.', value: 'Online.' }]);
const deliveryChannels = resetter.ref('');
const deliveryChannelsList = resetter.ref([{ label: 'Cash.', value: 'Cash.' },
{ label: 'Online.', value: 'Online.' },
{ label: 'Telephone Banking.', value: 'Telephone Banking.' },
{ label: 'Wire Transfers.', value: 'Wire Transfers.' }]);
const highestBalance = resetter.ref('');
const depositPerMonth = resetter.ref('');
const NumberOfDepositPerMonth = resetter.ref('');
const NumberOfDepositPerMonthList = resetter.ref([{ label: '1', value: '1' },
{ label: '2', value: '2' },
{ label: '3', value: '3' },
{ label: '4', value: '4' }]);
const NumberOfWithdrawalPerMonth = resetter.ref('');
const NumberOfWithdrawalPerMonthList = resetter.ref([{ label: '1', value: '1' },
{ label: '2', value: '2' },
{ label: '3', value: '3' },
{ label: '4', value: '4' }]);
const USCitizen = resetter.ref('no');
const USCardHolder = resetter.ref('no');
const USResidentTaxPurpose = resetter.ref('no');
const USBorn = resetter.ref('no');
const outsideUSBorn = resetter.ref('no');
const CountryOfStay = resetter.ref('no');
const USTelephoneNo = resetter.ref('no');
const standingInstructions = resetter.ref('no');
const USMailingAddress = resetter.ref('no');
const HoldMail = resetter.ref('no');
const TaxIdenNumber = resetter.ref('');
const TaxResidentCountry = resetter.ref('no');
const Country = resetter.ref('');
const CountryList = resetter.ref([{ label: 'Pakistan', value: 'Pakistan' },
{ label: 'U.S', value: 'U.S' }]);
const CRSTin = resetter.ref('');
const CurrAddCountry = resetter.ref('');
const Province = resetter.ref('');
const ProvinceList = resetter.ref([{ label: 'Punjab', value: 'Punjab' }, { label: 'Sindh', value: 'Sindh' }]);
const City = resetter.ref('');
const CityList = resetter.ref([{ label: 'Islamabad', value: 'Islamabad' }, { label: 'Lahore', value: 'Lahore' }]);
const Area = resetter.ref('');
const BlockTextBoxValue = resetter.ref('');
const HouseNo = resetter.ref('');
const NearestLandMark = resetter.ref('');
const ResidenceStatus = resetter.ref('');
const ResidenceStatusList = resetter.ref([{ label: 'Rented', value: 'Rented' }, { label: 'Own', value: 'Own' }]);
const timeAtCurrentAddress = resetter.ref('');
const AccomodationType = resetter.ref('');
const AccomodationTypeList = resetter.ref([{ label: 'House', value: 'House' }, { label: 'Flat', value: 'Flat' } , { label: 'Apartment', value: 'Apartment' }]);
const rentInRs = resetter.ref('');
const CurrAddCountryDropDown = (val) => {
    CurrAddCountry.value = val.value;
}
const CurrAddProvinceDropDown = (val) => {
    Province.value = val.value;
}
const CurrAddCityDropDown = (val) => {
    City.value = val.value;
}
const CurrAddResidenceStatusDropDown = (val) => {
    ResidenceStatus.value = val.value;
}
const CurrAddAccomodationTypeDropDown = (val) => {
    AccomodationType.value = val.value;
}
const CurrAddAreaTextBox = (event, val) => {
    Area.value = val;
}
const CurrAddBlockTextBox = (event, val) => {
    BlockTextBoxValue.value = val;
}
const CurrAddHouseNoTextBox = (event, val) => {
    HouseNo.value = val;
}
const CurrAddNearestLandMarkTextBox = (event, val) => {

    NearestLandMark.value = val;
}
const CurrAddtimeAtCurrentAddressTextBox = (event, val) => {
    timeAtCurrentAddress.value = val;
}
const CurrAddrentInRsTextBox = (event, val) => {
    rentInRs.value = val;
}
const PerAddAccomodationTypeDropDown = (val) => {
    PermanentAccomodationType.value = val.value;
}
const TempAddAccomodationTypeDropDown = (val) => {
    TempAccomodationType.value = val.value;
}
//
const PermanentAddCountry = resetter.ref();
const PermanentProvince = resetter.ref();
const PermanentCity = resetter.ref();
const PermanentArea = resetter.ref();
const PermanentBlockTextBoxValue = resetter.ref();
const PermanentHouseNo = resetter.ref();
const PermanentNearestLandMark = resetter.ref();
const PermanentResidenceStatus = resetter.ref();
const PermanentAccomodationType = resetter.ref();
const PermanenttimeAtCurrentAddress = resetter.ref();
const PermanentrentInRs = resetter.ref();
//
const TempAddCountry = resetter.ref();
const TempProvince = resetter.ref();
const TempCity = resetter.ref();
const TempArea = resetter.ref();
const TempBlockTextBoxValue = resetter.ref();
const TempHouseNo = resetter.ref();
const TempNearestLandMark = resetter.ref();
const TempResidenceStatus = resetter.ref();
const TempAccomodationType = resetter.ref();
const TemptimeAtCurrentAddress = resetter.ref();
const TemprentInRs = resetter.ref();
const Reason = resetter.ref('');
const ReasonList = resetter.ref([{ label: 'Other', value: 'Other' }]);

const cnicNoTextBox = (val) => {
    cnicNo.value = val;
}
const highestBalanceTextBox = (val) => {
    highestBalance.value = val;
}
const depositPerMonthTextBox = (val) => {
    depositPerMonth.value = val;
}
const CRSTinTextBox = (val) => {
    CRSTin.value = val;
}
const fatherSpouseRadioBtnOnChange = (val) => {
    fatherSpouseRadioBtn.value = val;
}
const haveVehicleRadioButtonOnChange = (val) => {
    haveVehicle.value = val;
}
const bankModeOfCoomunicationOnChange = (val) => {
    bankModeOfCoomunication.value = val;
}
const salutationDropDown = (val) => {
    salutation.value = val?.value;
}
const qualificationDropDown = (val) => {
    qualification.value = val?.value;
}
const maritalStatusDropDown = (val) => {
    maritalStatus.value = val?.value;
}
const purposeOfAccountDropDown = (val) => {
    purposeOfAccount.value = val?.value;
}
const accountCategoryDropDown = (val) => {
    accountCategory.value = val?.value;
}
const currencyDropDown = (val) => {
    currency.value = val?.value;
}
const chequeBookRequiredRadioButton = (val) => {
    chequeBookRequired.value = val;
}
const estatementRequiredRadioButton = (val) => {
    estatementRequired.value = val;
}
const smsAlertRadioButton = (val) => {
    smsAlert.value = val;
}
const isPepRadioButton = (val) => {
    isPep.value = val;
}
const modeOfTransactionDropDown = (val) => {
    modeOfTransaction.value = val?.value;
}
const deliveryChannelsDropDown = (val) => {
    deliveryChannels.value = val?.value;
}
const NumberOfDepositPerMonthDropDown = (val) => {
    NumberOfDepositPerMonth.value = val?.value;
}
const NumberOfWithdrawalPerMonthDropDown = (val) => {
    NumberOfWithdrawalPerMonth.value = val?.value;
}
const USCitizenRadioButton = (val) => {
    USCitizen.value = val;
}
const USCardHolderRadioButton = (val) => {
    USCardHolder.value = val;
}
const USResidentTaxPurposeRadioButton = (val) => {
    USResidentTaxPurpose.value = val;
}
const USBornRadioButton = (val) => {
    USBorn.value = val;
}
const outsideUSBornRadioButton = (val) => {
    outsideUSBorn.value = val;
}
const CountryOfStayRadioButton = (val) => {
    CountryOfStay.value = val;
}
const USTelephoneNoRadioButton = (val) => {
    USTelephoneNo.value = val;
}
const standingInstructionsRadioButton = (val) => {
    standingInstructions.value = val;
}
const USMailingAddressRadioButton = (val) => {
    USMailingAddress.value = val;
}
const HoldMailRadioButton = (val) => {
    HoldMail.value = val;
}
const TaxResidentCountryRadioButton = (val) => {
    TaxResidentCountry.value = val;
}
const CountryDropDown = (val) => {
    Country.value = val?.value;
}
const ReasonDropDown = (val) => {
    Reason.value = val?.value;
}
////Ocupational Details
const OccupationalStatusValue = resetter.ref('');
const OccupationalStatusList = [
    { label: 'Salaried', value: 'Salaried' },
    { label: 'Business', value: 'Business' }
];
const occupationProfession = resetter.ref('');
const employmemntLength = resetter.ref('');
const employerName = resetter.ref('');
const employmentYears = resetter.ref('');
const position = resetter.ref('');
const officeAddress = resetter.ref('');
const phone = resetter.ref('');
const fax = resetter.ref('');
const officeEmail = resetter.ref('');
const employerName2 = resetter.ref('');
const phone2 = resetter.ref('');
const fax2 = resetter.ref('');
const inEmploymentSince = resetter.ref('');
const preferredMailingAddress = resetter.ref('Current Address');
const preferredMailingAddressList = [
    { label: 'Current Address', value: 'Current Address' },
    { label: 'Permanent Address', value: 'Permanent Address' },
    { label: 'Temporary Address', value: 'Temporary Address' },
    { label: 'Office Address', value: 'Office Address' },
    { label: 'Other', value: 'Other' },


];
const isDisabledNextButtonOccupationalDetails = computed(() => {
    return OccupationalStatusValue.value == "" || employerName.value == "" || employmentYears.value == "" || position.value == "" || officeAddress.value == ""
})
const nextButtonIncomeDetailsDisabled = computed(() => {
    return grossMonthlySalary.value == "" || netMonthlyIncome.value == ""
})
const occupationalStatusDropDown = (val) => {
    OccupationalStatusValue.value = val?.value;
}
const occupationProfessionTextBox = (event, val) => {
    occupationProfession.value = val;
}
const employmemntLengthTextBox = (event, val) => {
    employmemntLength.value = val;
}
const employerNameTextBox = (event, val) => {
    employerName.value = val;
}
const employmentYearsTextBox = (event, val) => {
    employmentYears.value = val;
}
const positionTextBox = (event, val) => {
    position.value = val;
}
const officeAddressTextBox = (event, val) => {
    officeAddress.value = val;
}
//////Income

const grossMonthlySalary = resetter.ref('');
const netMonthlyIncome = resetter.ref('');
const monthlyIncomeFromOtherSourcesTabular = resetter.ref('');
const otherIncomeSources = resetter.ref('');
const totalGrossMonthlyIncome = resetter.ref('');
const endOfServiceBenefits = resetter.ref('');
const grossMonthlySalaryTextBox = (event, val) => {
    grossMonthlySalary.value = val;
}
const netMonthlyIncomeTextBox = (event, val) => {
    netMonthlyIncome.value = val;
}
const monthlyIncomeFromOtherSourcesTabularTextBox = (event, val) => {
    monthlyIncomeFromOtherSourcesTabular.value = val;
}
/////Desired Financing
const vehicleType = resetter.ref('New');
const vehicleTypeList = [
    { label: 'New', value: 'New' },
    { label: 'Used', value: 'Used' },
    { label: 'Reconditioned / Imported', value: 'Imported' }
];
const make = resetter.ref('');
const model = resetter.ref('');
const color = resetter.ref('');
const downPayment = resetter.ref('');
const price = resetter.ref('');
const modeOfFinancing = resetter.ref('Leasing');
const modeOfFinancingList = [
    { label: 'Leasing', value: 'Leasing' },
    { label: 'Markup Basis', value: 'Markup Basis' },
];
const desiredFinancingAmount = resetter.ref('');
const markUpMode = resetter.ref('Fixed');
const markUpModeList = [
    { label: 'Fixed', value: 'Fixed' },
    { label: 'Floating / Variable', value: 'Variable' }
];
const modeOfRepayment = resetter.ref('');
const modeOfRepaymentList = [
    { label: 'Direct Debit Authority', value: 'Direct Debit Authority' },
    { label: 'Post Dated Cheques', value: 'Post Dated Cheques' }
];
const desiredFinancing = resetter.ref('');
const desiredFinancingList = [
    { label: '1-year', value: '1-year' },
    { label: '2-year', value: '2-year' },
    { label: '5-year', value: '5-year' },
    { label: '10-year', value: '10-year' },

];
const makeTextBox = (event, val) => {
    make.value = val;
}
const modelTextBox = (event, val) => {
    model.value = val;
}
const colorTextBox = (event, val) => {
    color.value = val;
}
const downPaymentTextBox = (event, val) => {
    downPayment.value = val;
}
const isNextButtonDesiredFinancingDetailsDisabled = computed(() => {
    return make.value == '' || model.value == '' || downPayment.value == '';
})

////Refrences
const Reference1Name = resetter.ref('');
const Reference1Relationship = resetter.ref('');
const Reference1CNIC = resetter.ref('');
const Reference1Address = resetter.ref('');
const Reference1HomePhone = resetter.ref('');
const Reference1OtherPhone = resetter.ref('');
const Reference1Mobile = resetter.ref('');

const Reference2Name = resetter.ref('');
const Reference2Relationship = resetter.ref('');
const Reference2CNIC = resetter.ref('');
const Reference2Address = resetter.ref('');
const Reference2HomePhone = resetter.ref('');
const Reference2OtherPhone = resetter.ref('');
const Reference2Mobile = resetter.ref('');
const Reference1NameTextBox = (event, val) => {
    Reference1Name.value = val;
}
const Reference1RelationshipTextBox = (event, val) => {
    Reference1Relationship.value = val;
}
const Reference1CNICTextBox = (event, val) => {
    Reference1CNIC.value = val;
}
const Reference1HomePhoneTextBox = (event, val) => {
    Reference1HomePhone.value = val;
}
const Reference1OtherPhoneTextBox = (event, val) => {
    Reference1OtherPhone.value = val;
}
const Reference1MobileTextBox = (event, val) => {
    Reference1Mobile.value = val;
}
const Reference1AddressTextBox = (event, val) => {
    Reference1Address.value = val;
}
const Reference2NameTextBox = (event, val) => {
    Reference2Name.value = val;
}
const Reference2RelationshipTextBox = (event, val) => {
    Reference2Relationship.value = val;
}
const Reference2CNICTextBox = (event, val) => {
    Reference2CNIC.value = val;
}
const Reference2HomePhoneTextBox = (event, val) => {
    Reference2HomePhone.value = val;
}
const Reference2OtherPhoneTextBox = (event, val) => {
    Reference2OtherPhone.value = val;
}
const Reference2MobileTextBox = (event, val) => {
    Reference2Mobile.value = val;
}
const Reference2AddressTextBox = (event, val) => {
    Reference2Address.value = val;
}
const isNextButtonReferencesDisabled = computed(() => {
    return Reference1Name.value == '' || Reference1Relationship.value == '' || Reference1CNIC.value == '' || Reference1Mobile.value == '' || Reference2Name.value == '' || Reference2Relationship.value == '' || Reference2CNIC.value == '' || Reference2Mobile.value == '';
})
///Document
const SalariedOrselfEmployed = resetter.ref("salariedIndividual");
const RadioBtnDocumentList = [
    { label: 'Salaried Individual', value: 'salariedIndividual' },
    { label: 'Self Employed / Business Indivial', value: 'selfEmployedBusinessIndivial' }
]
const fetchBankStatementButton = () => {


}
////co applicant
const coApplicantList = resetter.ref([
]);
const coApplicantValue = resetter.ref('no');
const nameCoApplicant = resetter.ref('');
const mobileCoApplicant = resetter.ref('');
const emailCoApplicant = resetter.ref('');
const isNextButtonCoApplicantsDisabled = computed(() => {
    return coApplicantValue.value == 'no' ? false : (coApplicantList.value.length > 0 ? false : true);
})
/////Branch
const accountTitleBranchSelection = resetter.ref('');
const accountNoBranchSelection = resetter.ref('');
const Branch = resetter.ref('');
const branchValue = resetter.ref('currentBranch')
const selectedCity = resetter.ref('');
const selectedCityList = resetter.ref([{ id: 1, label: 'Islamabad', value: 'Islamabad' },
{ id: 2, label: 'Karachi', value: 'Karachi' }]);
const selectedArea = resetter.ref('');
const selectedAreaList = resetter.ref([{ label: 'F-6', value: 'F-6' },
{ label: 'Clifton', value: 'Clifton' }]);
const selectedBranch = resetter.ref('');
const selectedBranchList = resetter.ref([{ label: 'F-6 Branch', value: 'F-6 Branch' },
{ label: 'Clifton Branch', value: 'Clifton Branch' }]);
const branchList = [
    { label: 'My Current Branch', value: 'currentBranch' },
    { label: 'Select Other Branch', value: 'otherBranch' }
]
//////////CF1 Form

const cleanCreditCardBankName = resetter.ref('');
const cleanCreditCardApprovedLimit = resetter.ref('');
const securedCreditCardBankName = resetter.ref('');
const securedCreditCardApprovedLimit = resetter.ref('');
const cleanPersonalLoanBankName = resetter.ref('');
const cleanPersonalLoanApprovedLimit = resetter.ref('');
const cleanPersonalLoanOutstandingAmount = resetter.ref('');
const securedPersonalLoanBankName = resetter.ref('');
const securedPersonalLoanApprovedLimit = resetter.ref('');
const securedPersonalLoanOutstandingAmount = resetter.ref('');
const otherFacilitiesBankName = resetter.ref('');
const otherFacilitiesApprovedLimit = resetter.ref('');
const natureOfFacility = resetter.ref('');
const natureOfFacilityList = resetter.ref([{ label: 'Clean', value: 'Clean' },
{ label: 'Secured', value: 'Secured' }]);
const otherFacilitiesOutstandingAmount = resetter.ref('');
const appliedLimitsBankName = resetter.ref('');
const appliedLimitsFacilityUnderProcess = resetter.ref('');
const appliedLimitsnatureOfFacility = resetter.ref('');
const appliedLimitsnatureOfFacilityList = resetter.ref([{ label: 'Clean', value: 'Clean' },
{ label: 'Secured', value: 'Secured' }]);
/////Undertaking
const undertaking1 = resetter.ref(false);
const undertaking2 = resetter.ref(false);

const PermanentAddress = resetter.ref(true);
const TempAddress = resetter.ref(true);
const signaturePreview = resetter.ref(null);
const activeTab = resetter.ref(0);
const activeSubTab = resetter.ref(0);
const successDialog = resetter.ref(false)

const cleanCreditCardBankNameTextBox = (val) => {

}

const undertaking1CheckBox = (val) => {
    undertaking1.value = val;
}
const undertaking2CheckBox = (val) => {
    undertaking2.value = val;
}

const isNextButtonReviewAndVerifyDisabled = computed(() => {
    return !(undertaking1.value == true && undertaking2.value == true);
})
/////////////////////////
const accountInfo = resetter.ref(true);
const verification = resetter.ref(false);
const AcPersonalDetails = resetter.ref(false);
const AcPersonalDetailsExisting = resetter.ref(false);
const OccupationalDetails = resetter.ref(false);
const incomeDetails = resetter.ref(false);
const desiredFinancingDetails = resetter.ref(false);
const references = resetter.ref(false);
const Documents = resetter.ref(false);
const coApplicant = resetter.ref(false);
const branchSelection = resetter.ref(false);
const cf1Form = resetter.ref(false);
const reviewAndVerify = resetter.ref(false);
const underTaking = resetter.ref(false);

////////////////////////
const accountHolderOnChange = (val) => {
    resetter.resetState();
    isAccountHolder.value = val;

    // verification.value = false;
    // AcPersonalDetails.value = false;
    // AcPersonalDetailsExisting.value = false;
    // OccupationalDetails.value = false;
    // incomeDetails.value = false;
    // desiredFinancingDetails.value = false;
    // references.value = false;
    // Documents.value = false;
    // coApplicant.value = false;
    // branchSelection.value = false;
    // cf1Form.value = false;
    // reviewAndVerify.value = false;
    // underTaking.value = false;
    // console.log(isAccountHolder.value);
    // if (isAccountHolder.value == "yes") {
    //     router.push("/ExistingCustomerLoanApplication")
    // }
}
const saveInputValue = (val) => {
    InputOtpValue.value = val.value;
}

const sendOTPButton = () => {
    OTPFlag.value = true;
    startTimer();
}
const nextButton = () => {
    if (isAccountHolder.value == 'yes') {
        OTPFlag.value = true;
        startTimer();
    }
    verification.value = true;
    activeNames.value.push('1')
};
const verifyButton = () => {
    if (isAccountHolder.value == 'yes') {
        AcPersonalDetailsExisting.value = true;
        FetchButton();
    } else {
        AcPersonalDetails.value = true;
    }
    clearInterval(timer);
    timeLeft.value = 0;
    activeNames.value.push('2')
};
const nextButtonAcPersonalDetails = () => {
    OccupationalDetails.value = true;
    activeNames.value.push('3')
};
const nextButtonOccupationalDetails = () => {
    incomeDetails.value = true;
    activeNames.value.push("4");
}
const nextButtonIncomeDetails = () => {
    desiredFinancingDetails.value = true;
    activeNames.value.push("5");
}
const nextButtonDesiredFinancingDetails = () => {
    references.value = true;
    activeNames.value.push("6");
}
const nextButtonReferences = () => {
    Documents.value = true;
    activeNames.value.push("7");
}
const nextButtonDocuments = () => {
    coApplicant.value = true;
    activeNames.value.push("8");
}
const nextButtonCoApplicant = () => {
    branchSelection.value = true;
    activeNames.value.push("9");
}
const nextButtonBranchSelection = () => {
    cf1Form.value = true;
    activeNames.value.push("10");
}
const nextButtonCF1Form = () => {
    reviewAndVerify.value = true;
    activeNames.value.push("11");
}
const nextReviewAndVerify = () => {
    underTaking.value = true;
    activeNames.value.push("12");
}
const addNewCoApplicant = (val) => {
    console.log("addNewCoApplicant...")
}
const sendInviteButton = (val) => {
    coApplicantList.value.push(
        {
            name: nameCoApplicant.value,
            status: 'Pending'
        }
    )
    nameCoApplicant.value = ' ';
    emailCoApplicant.value = ' ';
    mobileCoApplicant.value = ' ';
}
const nameCoApplicantTextBox = (event, val) => {
    nameCoApplicant.value = val;
}
const mobileCoApplicantTextBox = (event, val) => {
    mobileCoApplicant.value = val;
}
const emailCoApplicantTextBox = (event, val) => {
    emailCoApplicant.value = val;
}
const preferredMailingAddressOnChange = (val) => {
    preferredMailingAddress.value = val;
}
const branchOnChange = (val) => {
    branchValue.value = val;
}
const SalariedOrselfEmployedChange = (val) => {
    SalariedOrselfEmployed.value = val;
}

const vehicleTypeOnChange = (val) => {
    vehicleType.value = val;
}
const modeOfFinancingOnChange = (val) => {
    modeOfFinancing.value = val;
}
const markUpModeOnChange = (val) => {
    markUpMode.value = val;
}
const onTemporaryAddressCheckBoxChange = (val) => {
    TempAddress.value = val
    if (val == false) {
        TempAddCountry.value = "";
        TempProvince.value = "";
        TempCity.value = "";
        TempArea.value = " ";
        TempBlockTextBoxValue.value = " ";
        TempHouseNo.value = " ";
        TempNearestLandMark.value = " ";
        TempResidenceStatus.value = "";
        TempAccomodationType.value = " ";
        TemptimeAtCurrentAddress.value = " ";
        TemprentInRs.value = " ";
    } else {
        TempAddCountry.value = CurrAddCountry.value;
        TempProvince.value = Province.value;
        TempCity.value = City.value;
        TempArea.value = Area.value;
        TempBlockTextBoxValue.value = BlockTextBoxValue.value;
        TempHouseNo.value = HouseNo.value;
        TempNearestLandMark.value = NearestLandMark.value;
        TempResidenceStatus.value = ResidenceStatus.value;
        TempAccomodationType.value = AccomodationType.value;
        TemptimeAtCurrentAddress.value = timeAtCurrentAddress.value;
        TemprentInRs.value = rentInRs.value;
    }
}
const onCheckBoxPermanentAddressChange = (val) => {
    debugger;
    PermanentAddress.value = val
    if (val == false) {
        PermanentAddCountry.value = "";
        PermanentProvince.value = "";
        PermanentCity.value = "";
        PermanentArea.value = " ";
        PermanentBlockTextBoxValue.value = " ";
        PermanentHouseNo.value = " ";
        PermanentNearestLandMark.value = " ";
        PermanentResidenceStatus.value = "";
        PermanentAccomodationType.value = " ";
        PermanenttimeAtCurrentAddress.value = " ";
        PermanentrentInRs.value = " ";
    } else {
        PermanentAddCountry.value = CurrAddCountry.value;
        PermanentProvince.value = Province.value;
        PermanentCity.value = City.value;
        PermanentArea.value = Area.value;
        PermanentBlockTextBoxValue.value = BlockTextBoxValue.value;
        PermanentHouseNo.value = HouseNo.value;
        PermanentNearestLandMark.value = NearestLandMark.value;
        PermanentResidenceStatus.value = ResidenceStatus.value;
        PermanentAccomodationType.value = AccomodationType.value;
        PermanenttimeAtCurrentAddress.value = timeAtCurrentAddress.value;
        PermanentrentInRs.value = rentInRs.value;
    }
}
const FetchButton = async () => {
    // const res = await axios.get('/fetchData.json');
    // fullName.value = res.data?.[0]?.fullName;
    // cnicIssueDate.value = res.data?.[0]?.cnicIssueDate;
    // cnicExpiryDate.value = res.data?.[0]?.cnicExpiryDate;
    // ntnNumber.value = res.data?.[0]?.ntnNumber;
    // salutation.value = res.data?.[0]?.salutation;
    // qualification.value = res.data?.[0]?.qualification;
    // maritalStatus.value = res.data?.[0]?.maritalStatus;
    // dateOfBirth.value = res.data?.[0]?.dateOfBirth;
    // fatherSpouseName.value = res.data?.[0]?.fatherSpouseName;
    // motherName.value = res.data?.[0]?.motherName;
    // children.value = res.data?.[0]?.children;
    // otherDependent.value = res.data?.[0]?.otherDependent;
    // otherPhoneNo.value = res.data?.[0]?.otherPhoneNo;
    // nextOfKin.value = res.data?.[0]?.nextOfKin;
    // nextOfKinRelation.value = res.data?.[0]?.nextOfKinRelation;
    // nextOfKinCnic.value = res.data?.[0]?.nextOfKinCnic;
    // nextOfKinAddress.value = res.data?.[0]?.nextOfKinAddress;
    // vehicleModel.value = res.data?.[0]?.vehicleModel;
    // vehicleStatus.value = res.data?.[0]?.vehicleStatus;
    isNextButtonAcPersonalDetailsDisabled.value = false;
    isNextButtonAcPersonalDetailsExistingDisabled.value = false;

    if (isAccountHolder.value == 'yes') {
        identificationType.value = 'CNIC';
        cnicNo.value = "82313-2135678-2";


        TempAddress.value = true;
        PermanentAddress.value = true;

        OccupationalStatusValue.value = "Salaried";
        occupationProfession.value = "Engineer";
        employmemntLength.value = "3 years";
        employerName.value = "Teresol";
        employmentYears.value = "2 years";
        position.value = "Manager";
        officeAddress.value = "DHA Islamabad";
        phone.value = "051-4680886";
        fax.value = "051-4680886";
        officeEmail.value = "izaheer@teresol.com";

        // employerName2.value = "";
        // phone2.value = "";
        // fax2.value = "";
        // inEmploymentSince.value = "";

        ///
        grossMonthlySalary.value = '300,000';
        netMonthlyIncome.value = '400,000';
        monthlyIncomeFromOtherSourcesTabular.value = '100,000';
        totalGrossMonthlyIncome.value = '400,000';
        endOfServiceBenefits.value = 'N/A';


        ///
        make.value = 'TOYOTA';
        model.value = '2023';
        color.value = 'Silver';
        downPayment.value = '2,000,000';
        price.value = '6,000,000'
        modeOfRepayment.value = 'Direct Debit Authority';
        desiredFinancing.value = '5-year'
        desiredFinancingAmount.value = '4,000,000'
        ////
        Reference1Name.value = 'Sameer';
        Reference1Relationship.value = 'Brother';
        Reference1CNIC.value = '81102-0532684-2';
        Reference1Address.value = 'Islamabad,Pakistan';
        Reference1HomePhone.value = '051-4680886';
        Reference1OtherPhone.value = '0345-8269854';
        Reference1Mobile.value = '0347-1235876';
        Reference2Name.value = 'Ali';
        Reference2Relationship.value = 'Friend';
        Reference2CNIC.value = '81402-4569852-4';
        Reference2Address.value = 'Islamabad,Pakistan';
        Reference2HomePhone.value = '';
        Reference2OtherPhone.value = '0348-2563458';
        Reference2Mobile.value = '0349-5142456';
    }
    fullName.value = "Izza Zaheer";
    cnicIssueDate.value = "02/02/2020";
    cnicExpiryDate.value = "02/02/2030";
    ntnNumber.value = "78965425";
    DobTextBox.value = "02/02/2025";
    salutation.value = "Ms.";
    qualification.value = "Bachelor";
    maritalStatus.value = "Single";
    dateOfBirth.value = "02/02/2011";
    fatherSpouseName.value = "Muhammad Ali";
    motherName.value = "Nisa Khan";
    children.value = '0';
    otherDependent.value = '0';
    otherPhoneNo.value = "0351-5442088";
    nextOfKin.value = "Ali";
    nextOfKinRelation.value = "Brother";
    nextOfKinCnic.value = "37402-0961617-7";
    nextOfKinAddress.value = "Rawalpindi, Pakistan.";
    vehicleModel.value = "MX255";
    vehicleStatus.value = "Old"

    CurrAddCountry.value = "Pakistan"
    Province.value = "Sindh"
    City.value = "Islamabad"
    Area.value = "Bahria"
    BlockTextBoxValue.value = "Block 69"
    HouseNo.value = "House 06"
    NearestLandMark.value = "Giga Mall"
    ResidenceStatus.value = "Rented";
    AccomodationType.value = "Flat";
    timeAtCurrentAddress.value = "1 year";
    rentInRs.value = "50,000";
    //
    PermanentAddCountry.value = "Pakistan"
    PermanentProvince.value = "Sindh"
    PermanentCity.value = "Islamabad"
    PermanentArea.value = "Bahria"
    PermanentBlockTextBoxValue.value = "Block 69"
    PermanentHouseNo.value = "House 06"
    PermanentNearestLandMark.value = "Giga Mall"
    PermanentResidenceStatus.value = "Rented";
    PermanentAccomodationType.value = "Flat";
    PermanenttimeAtCurrentAddress.value = "5 year";
    PermanentrentInRs.value = "50,000";
    //
    TempAddCountry.value = "Pakistan"
    TempProvince.value = "Sindh"
    TempCity.value = "Islamabad"
    TempArea.value = "Bahria"
    TempBlockTextBoxValue.value = "Block 69"
    TempHouseNo.value = "House 06"
    TempNearestLandMark.value = "Giga Mall"
    TempResidenceStatus.value = "Rented";
    TempAccomodationType.value = "Flat";
    TemptimeAtCurrentAddress.value = "1 year";
    TemprentInRs.value = "50,000";

}

const coApplicantRadioButtonOnChange = (val) => {
    coApplicantValue.value = val;
}
const downloadForm = () => {
    // window.open('/form.pdf', '_blank')
}
const handleFile = (val) => {
    console.log(val);

}
const handleSignatureUpload = (file) => {
    signaturePreview.value = URL.createObjectURL(file.raw)
}
const onTabChange = (event) => {
    console.log('New tab index:', event.index)
    activeSubTab.value = 0
}
const CancelForm = () => {
    router.push("./loan-origination-&-management/Consumer-Loan")
}
const SubmitForm = () => {
    successDialog.value = true
}

const handleOk = () => {
    successDialog.value = false
    router.push('/loan-origination-&-management/Consumer-Loan') // 👈 change route
}
</script>
<style scoped>
/* ---------- Info Box ---------- */
.info-box {
    max-width: 600px;
    background-color: #fffbe6;
    border: 1px solid #f0e1a0;
    border-radius: 8px;
    padding: 10px;
}

/* ---------- Header ---------- */
.info-header {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    /* max-width: 720px; */
    /* ✅ keeps text compact */
    /* margin: 0 auto; */
}

.info-icon {
    font-size: 26px;
    line-height: 1;
    color: #f5b400;
}

.info-header strong {
    font-size: 15px;
}

.info-header p {
    margin: 4px 0 0;
    font-size: 14px;
    color: #6b7280;
}


/* ---------- Divider ---------- */
.info-box hr {
    margin: 20px 0;
    border: none;
    border-top: 1px solid #e5e7eb;
}

/* ---------- Content ---------- */
.info-content {
    display: flex;
    justify-content: center;
    gap: 80px;
    /* ✅ smaller gap */
    flex-wrap: wrap;
}

.info-column {
    min-width: 260px;
    /* ✅ prevents squeeze */
}

.info-column h4 {
    margin-bottom: 8px;
    font-size: 14px;
    color: #6b7280;
}

.info-column ul {
    margin: 0;
    padding-left: 18px;
    color: #6b7280;
}

.info-column li {
    margin-bottom: 6px;
    font-size: 14px;
}

/* ---------- Mobile ---------- */
@media (max-width: 640px) {
    .info-box {
        padding: 20px;
        margin: 32px 16px;
    }

    .info-header {
        max-width: 100%;
    }

    .info-content {
        gap: 32px;
    }
}

.section-header {
    margin-bottom: 1rem;
}

.section-header h3 {
    position: relative;
    font-size: 18px;
    font-weight: 600;
    color: var(--primary-color);
    margin-left: 10px;
    padding-bottom: 8px;
}

.section-header h3::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
}

.signature-text {
    color: #606266;
    line-height: 1.6;
}

.esign-header {
    background: var(--primary-color);
    color: white;
    padding: 20px;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.signature-preview {
    margin-top: 20px;
    padding: 15px;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    background: #f9fafb;
    display: flex;
    justify-content: center;
}

.signature-preview img {
    max-height: 120px;
    object-fit: contain;
}


.icon-circle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: 2px solid var(--primary-color);
    border-radius: 50%;
    margin-right: 8px;
}

.icon-circle .pi {
    color: var(--primary-color);
    font-size: 1rem;
}

.icon-text {
    color: black;
    vertical-align: middle;
}

/* fieldset {
    padding: 0.99% !important;
    border: 1px solid var(--text-color) !important;

} */

/* tabs */
.custom-tab {
    flex: 0.8;
    text-align: center;
    padding: 0.9rem 1rem;
    font-weight: bold;
    color: var(--border-color);
    border-right: 1px solid #e5e7eb;
    background: #f9fafb;
    transition: all 0.2s ease;
}

.custom-tab:hover {
    background: #f3f4f6;
}

.custom-tab.p-tab-active {
    /* background: var(--primary-color); */
    color: var(--primary-color);
    border-right: 1px var(--primary-color);
    font-weight: bold;
}
</style>
<template>
    <Accordion class="accordianClass" multiple v-model:value="activeNames">
        <AccordionPanel v-if="openCustomer" value="0" ref="panel0">
            <AccordionHeader>Open New Customer's Fast Account</AccordionHeader>
            <AccordionContent>
                <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                    <div class="grid grid-cols-3 gap-5 mb-4">
                        <div>
                            <Dropdown v-bind="{ ...BranchDropdownProps }" @dropdown-on-change="onDropDownchange"
                                :isFloatableLabel="true" />

                        </div>
                    </div>
                    <div class="grid grid-cols-3 gap-5 mb-4">
                        <div>
                            <TextBox name="Generic" v-bind="{ ...CustomerTextBoxProps }" :isFloatableLabel="true"
                                @text-box-on-blur="onBlur" @text-box-on-key-press="onKeyPress"
                                @text-box-on-key-down="onKeyDown" @text-box-on-key-up="onKeyUp"
                                @text-box-on-input="onInput" @text-box-on-focus="onFocus" @text-box-on-paste="onPaste"
                                @text-box-on-drop="onDrop" />
                        </div>
                    </div>
                </div>
                <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-11"></div>
                        <div class="col-span-1">
                            <Button backgroundColor="var(--primary-color)" native-type="button" name="NextButton"
                                label="Next" @Button-onClick="nextButtonClick" @Button-onFocus="buttonOnFocus"
                                @Button-onBlur="buttonOnBlur" />
                        </div>
                    </div>
                </div>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel v-if="openFastAccount" value="1" ref="panel1">
            <AccordionHeader>Open Fast Account</AccordionHeader>
            <AccordionContent>
                <!-- Basic Info -->
                <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                    <div class="grid grid-cols-3 gap-5 mb-4">
                        <Dropdown v-bind="{ ...BranchDropdownProps }" isFloatableLabel label="Branch" />
                        <TextBox v-bind="{ ...CustomerTextBoxProps }" isFloatableLabel label="Customer No." />
                        <TextBox v-bind="{ ...ACOpeningTextBoxProps }" isFloatableLabel label="A/C Opening Date" />
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox v-bind="{ ...ReferenceNoTextBoxProps }" isFloatableLabel label="Reference No" />
                        </div>
                        <div class="col-span-1">
                            <Button backgroundColor="var(--primary-color)" @Button-onClick="fetchButtonOnClick"
                                label="Fetch" />
                        </div>
                        <div class="col-span-1">
                            <Button backgroundColor="var(--primary-color)" label="Ref Inquiry" />
                        </div>
                    </div>
                </div>
                <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-11"></div>
                        <div class="col-span-1 ">
                            <Button @Button-onClick="fastOKButtonOnClick" :isDisabled="enableDisabledProcessButton"
                                backgroundColor="var(--primary-color)" label="OK" />
                        </div>
                        <!-- <div class="col-span-1 ">
                            <Button backgroundColor="var(--primary-color)" label="Exit" />
                        </div> -->
                    </div>
                </div>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel v-if="openBiometricDetails" value="2" ref="panel2">
            <AccordionHeader>Biometric Details</AccordionHeader>
            <AccordionContent>
                <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                    <Table name="BiometricDetailsTable" :tableColumns="biometricColumns" :tableData="biometricData"
                        :selectedRows="onBiometricCurrentRow" @table-row-click="onBiometricRowClick" tableHeight="50"
                        headerLabelsFontWeight="normal" headrLabelColor="blue" labelFontWeight="normal"
                        labelColor="black" backgroundColor="white" tableMode="single" />
                </div>

                <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-10"></div>
                        <div class="col-span-1">
                            <Button @Button-onClick="viewDetailsButtonOnClick" backgroundColor="var(--primary-color)"
                                label="View Details" />
                        </div>
                        <div class="col-span-1">
                            <Button backgroundColor="var(--primary-color)" label="Exit" />
                        </div>
                    </div>
                </div>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel v-if="openBiometricVerification" value="3" ref="panel3">
            <AccordionHeader>Biometric Verification Details</AccordionHeader>
            <AccordionContent>
                <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                    <div class="grid grid-cols-4 gap-4 mb-4">
                        <Dropdown isFloatableLabel label="Identity Doc Type" />
                        <TextBox isFloatableLabel label="Identity Doc. No." />
                        <Dropdown isFloatableLabel label="Cust. Type" />
                        <Dropdown isFloatableLabel label="Category of A/C" />
                    </div>
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-3">
                            <TextBox isFloatableLabel label="Limitation" />
                        </div>
                        <div class="col-span-3">
                            <TextBox isFloatableLabel label="Reference No" />
                        </div>
                        <div class="col-span-3">
                            <TextBox isFloatableLabel label="Certification Number" />
                        </div>
                        <div class="col-span-1">
                            <Button @Button-onClick="entityButtonOnClick" backgroundColor="var(--primary-color)"
                                label="Entity Info" class="h-full" />
                        </div>
                        <div class="col-span-2">
                            <div class="flex items-center">
                                <Checkbox chekbox-label="Primary Applicant" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                    <div class="grid grid-cols-3 gap-4 mb-4">
                        <TextBox isFloatableLabel label="Title of Account" />
                        <TextBox isFloatableLabel label="Id Expiry Date" />
                        <TextBox isFloatableLabel label="D.O.B" />
                    </div>
                    <div class="grid grid-cols-3 gap-4 mb-4">
                        <TextBox isFloatableLabel label="CNIC Name" />
                        <TextBox isFloatableLabel label="Cust/Hsm Name" />
                        <TextBox isFloatableLabel label="Fath/Husb. Name" />
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                        <TextBox isFloatableLabel label="Father/Husb. Name" />
                        <TextBox isFloatableLabel label="Place Of Birth" />
                        <div class="flex items-center">
                            <Checkbox chekbox-label="Debarred List Checked" />
                        </div>
                    </div>
                </div>

                <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                    <div class="grid grid-cols-2 gap-4 mb-4">
                        <TextArea isFloatableLabel label="Permanent Address" />
                        <TextArea isFloatableLabel label="Current Address" />
                    </div>
                    <div class="grid grid-cols-3 gap-4 mb-4">
                        <TextBox isFloatableLabel label="House/Flat No." />
                        <TextBox isFloatableLabel label="Street/Lane Name" />
                        <TextBox isFloatableLabel label="Area/Town/Village" />
                    </div>
                    <div class="grid grid-cols-4 gap-4">
                        <Dropdown isFloatableLabel label="Country" />
                        <Dropdown isFloatableLabel label="City" />
                        <Dropdown isFloatableLabel label="Province" />
                        <Dropdown isFloatableLabel label="Nationality" />
                    </div>
                </div>

                <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-6">
                            <Dropdown isFloatableLabel label="Occupation" />
                        </div>
                        <div class="col-span-2">
                            <Checkbox chekbox-label="Other Nationality" />
                        </div>
                        <div class="col-span-1">
                            <Button @Button-onClick="addViewButtonOnClick" backgroundColor="var(--primary-color)"
                                label="Add/View" />
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-8">
                            <TextBox isFloatableLabel label="Purpose" />
                        </div>
                        <div class="col-span-2 flex flex-col justify-center text-xs">
                            <p>Capture Time: 11:18:35</p>
                        </div>
                        <div class="col-span-2 flex flex-col justify-center text-xs">
                            <p>Capture Date: 2022.11.25</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <TextBox isFloatableLabel label="Verification Status" />
                        <TextBox isFloatableLabel label="Nadir Message" />
                    </div>
                </div>

                <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-1">
                            <Button isDisabled backgroundColor="var(--primary-color)" label="Add" />
                        </div>
                        <div class="col-span-1">
                            <Button isDisabled backgroundColor="var(--primary-color)" label="Change" />
                        </div>
                        <div class="col-span-8"></div>
                        <div class="col-span-1">
                            <Button isDisabled backgroundColor="var(--primary-color)" label="Print" />
                        </div>
                        <div class="col-span-1">
                            <Button backgroundColor="var(--primary-color)" label="Back" />
                        </div>
                    </div>
                </div>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel v-if="openEntityDetails" value="4" ref="panel4">
            <AccordionHeader>Entity Details</AccordionHeader>
            <AccordionContent>
                <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                    <div class="font-semibold text-sm mb-3 text-gray-700">Entity Information</div>

                    <div class="grid grid-cols-2 gap-5 mb-4">
                        <TextBox isFloatableLabel label="Entity Name" v-model="entityName" />
                        <TextBox isFloatableLabel label="Registration No." v-model="regNo" />
                    </div>

                    <div class="grid grid-cols-2 gap-5 mb-4">
                        <Dropdown isFloatableLabel label="Registered Country" v-model="regCountry" />
                        <div class="grid grid-cols-12 gap-2">
                            <div class="col-span-12">
                                <TextBox isFloatableLabel label="NTN" v-model="ntn" />
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-5 mb-4">
                        <TextBox isFloatableLabel label="House/Flat No., St./Lane" v-model="houseNo" />
                        <Dropdown isFloatableLabel label="Country" v-model="country" />
                    </div>

                    <div class="grid grid-cols-2 gap-5 mb-4">
                        <TextBox isFloatableLabel label="Street/Lane/Ave. Name" v-model="streetName" />
                        <Dropdown isFloatableLabel label="City" v-model="city" />
                    </div>

                    <div class="grid grid-cols-2 gap-5 mb-4">
                        <TextBox isFloatableLabel label="Area/Town/ Village" v-model="area" />
                        <TextBox isFloatableLabel label="Province" v-model="province" />
                    </div>
                </div>

                <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                    <div class="font-semibold text-sm mb-3 text-gray-700">Tagging CIF Entity With Entity Account(s)
                    </div>

                    <div
                        class="grid grid-cols-12 gap-4 items-center border border-gray-100 p-3 rounded-lg bg-gray-50 mb-4">
                        <div class="col-span-1">
                            <Button @Button-onClick="tagCIFButtonOnClick" backgroundColor="var(--primary-color)"
                                label="Tag CIF" class="w-full" />
                        </div>
                        <div class="col-span-2">
                            <a href="#" class="text-blue-600 text-sm hover:underline">New CIF</a>
                        </div>
                        <div class="col-span-5"></div>
                        <div class="col-span-4 text-right">
                            <span class="text-blue-500 text-xs italic">Hint: Please tag the CIF first</span>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mt-4">
                        <div class="col-span-11"></div>
                        <div class="col-span-1">
                            <Button backgroundColor="var(--primary-color)" label="Back" class="w-full" />
                        </div>
                    </div>
                </div>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel v-if="openTaggingCifEntity" value="5" ref="panel5">
            <AccordionHeader>Tagging CIF Entity With Entity Account(s)</AccordionHeader>
            <AccordionContent>
                <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                    <div class="font-semibold text-sm mb-3 text-gray-700">Tagging CIF Entity with Entity Account</div>

                    <div class="grid grid-cols-12 gap-5 mb-4">
                        <div class="col-span-6">
                            <TextBox isFloatableLabel label="NTN" v-model="filter.ntn" />
                        </div>
                        <div class="col-span-6">
                            <TextBox isFloatableLabel label="Reg No" v-model="filter.regNo" />
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-5 mb-4">
                        <div class="col-span-6">
                            <Dropdown isFloatableLabel label="ID Category" v-model="filter.idCategory" />
                        </div>
                        <div class="col-span-6">
                            <TextBox isFloatableLabel label="ID No" v-model="filter.idNo" />
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-5 mb-4 items-end">
                        <div class="col-span-4">
                            <TextBox isFloatableLabel label="CIF" v-model="filter.cif" />
                        </div>
                        <div class="col-span-5">
                            <TextBox isFloatableLabel label="Name" v-model="filter.name" />
                        </div>
                        <div class="col-span-1">
                            <Button backgroundColor="var(--primary-color)" label="Search" class="w-full" />
                        </div>
                    </div>
                </div>

                <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                    <div class="font-semibold text-sm mb-4 text-gray-700">All Records</div>

                    <div class="grid grid-cols-12 mb-4">
                        <div class="col-span-12">
                            <Table name="CIFTaggingTable" :tableColumns="cifColumns" :tableData="cifData"
                                tableHeight="60" headerLabelsFontWeight="normal" headrLabelColor="blue"
                                labelFontWeight="normal" labelColor="black" backgroundColor="white"
                                tableMode="single" />
                        </div>
                    </div>
                </div>

                <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <Checkbox name="NewCIF" chekbox-label="New CIF" v-model="isNewCif" />
                    <div class="grid grid-cols-12 gap-4 items-center">
                        <div class="col-span-1">
                            <Button backgroundColor="var(--primary-color)" label="Select" :disabled="!isNewCif"
                                class="w-full" />
                        </div>
                        <div class="col-span-1">
                            <Button backgroundColor="var(--primary-color)" label="Reset" class="w-full" />
                        </div>
                        <div class="col-span-9"></div>
                        <div class="col-span-1">
                            <Button backgroundColor="var(--primary-color)" label="Back" class="w-full" />
                        </div>
                    </div>
                </div>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel v-if="openAddandView" value="6" ref="panel6">
            <AccordionHeader>Add/Remove Other Nationality</AccordionHeader>
            <AccordionContent>
                <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                    <div class="font-semibold text-sm mb-3 text-gray-700">Add/Remove Other Nationalities</div>

                    <!-- //// -->
                    <div class="grid grid-cols-12 gap-4 items-center">
                        <div class="col-span-5">
                            <div class="text-xs font-medium mb-1 text-gray-500 uppercase">Available</div>
                            <div class="border border-gray-300 rounded-lg h-64 overflow-y-auto bg-gray-50 p-2">
                                <div v-for="nat in availableNationalities" :key="nat.code"
                                    @click="activeAvailable = nat; activeSelected = null"
                                    :class="['text-sm p-1.5 cursor-pointer rounded mb-1 transition',
                                        activeAvailable?.code === nat.code ? 'bg-blue-600 text-white' : 'hover:bg-blue-100']">
                                    {{ nat.name }}-{{ nat.code }}
                                </div>
                            </div>
                        </div>

                        <div class="col-span-2 flex flex-col gap-2 px-2">
                            <Button backgroundColor="var(--primary-color)" label="Add All >>" class="w-full text-xs"
                                :disabled="availableNationalities.length === 0" @Button-onClick="addAll" />

                            <Button backgroundColor="var(--primary-color)" label="Add >" class="w-full text-xs"
                                :disabled="!activeAvailable" @Button-onClick="addSelected" />

                            <Button backgroundColor="var(--primary-color)" label="< Remove" class="w-full text-xs"
                                :disabled="!activeSelected" @Button-onClick="removeSelected" />

                            <Button backgroundColor="var(--primary-color)" label="<< Remove All" class="w-full text-xs"
                                :disabled="selectedNationalities.length === 0" @Button-onClick="removeAll" />
                        </div>

                        <div class="col-span-5">
                            <div class="text-xs font-medium mb-1 text-gray-500 uppercase">Selected</div>
                            <div class="border border-gray-300 rounded-lg h-64 overflow-y-auto bg-white p-2">
                                <div v-for="nat in selectedNationalities" :key="nat.code"
                                    @click="activeSelected = nat; activeAvailable = null"
                                    :class="['text-sm p-1.5 cursor-pointer rounded mb-1 font-semibold transition',
                                        activeSelected?.code === nat.code ? 'bg-red-600 text-white' : 'hover:bg-red-50']">
                                    {{ nat.name }}-{{ nat.code }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- //// -->

                    <div class="grid grid-cols-12 mt-4">
                        <div class="col-span-11"></div>
                        <div class="col-span-1 text-right">
                            <Button backgroundColor="var(--primary-color)" label="Back" class="w-full" />
                        </div>
                    </div>
                </div>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel v-if="openProcessFastAccount" value="7" ref="panel7">
            <AccordionHeader>Process Fast Account</AccordionHeader>
            <AccordionContent>
                <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                    <div class="grid grid-cols-2 gap-5 mb-4">
                        <TextBox isFloatableLabel label="Title of A/C" />
                        <TextBox v-bind="{ ...ACCurrencyTextBoxProps }" isFloatableLabel label="A/C Currency" />

                    </div>

                    <div class="grid grid-cols-4 gap-5 mb-4">
                        <Dropdown @dropdown-on-change="ACTypeDropDownChange" v-bind="{ ...ACTypesDropDownProps }"
                            isFloatableLabel label="A/C Type" />
                        <TextBox @text-box-on-blur="onRunNoBlur" v-bind="{ ...RunNoTextBoxProps }" isFloatableLabel
                            label="Running No" />
                        <TextBox v-bind="{ ...CheckDigitTextBoxProps }" isFloatableLabel label="Check Digit" />
                        <Checkbox name="ChequeBook" label="Cheque Book Required" chekbox-label="Cheque Book Required"
                            v-model="chequeBookRequired" />
                        <div></div>
                    </div>
                </div>

                <!-- A/C Classification -->
                <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                    <div class="font-semibold text-sm">A/C Classification</div>
                    <div class="grid grid-cols-2 gap-5 mb-4">
                        <Dropdown v-bind="{ ...CategoryDropDownProps }" isFloatableLabel label="Category" />
                        <Dropdown v-bind="{ ...AccountNatureDropDownProps }" isFloatableLabel label="A/C Nature" />
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-5">
                            <Dropdown v-bind="{ ...MajClassificationDropDownProps }" style="margin-bottom:1%"
                                isFloatableLabel label="Major Classification" />
                            <Dropdown v-bind="{ ...SubClassificationDropDownProps }" isFloatableLabel
                                label="Sub Classification" />
                        </div>
                        <div class="col-span-1">
                            <Button backgroundColor="var(--primary-color)" style="margin-bottom:6%" label="Add >" />
                            <Button backgroundColor="var(--primary-color)" style="margin-bottom:2%" label="< Remove" />
                            <Checkbox name="Resident" label="Resident" chekbox-label="Resident" v-model="isResident" />
                        </div>
                        <div class="col-span-6">
                            <TextArea name="ACNotes" :is-floatable-label="true" v-model="acNotes" />
                        </div>
                    </div>
                </div>

                <!-- Marketing Source -->
                <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                    <div class="font-semibold text-sm mb-4">Marketing Source</div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-5">
                            <Dropdown style="margin-bottom:0.8%" isFloatableLabel label="Market Source" />
                            <Dropdown style="margin-bottom:0.8%" isFloatableLabel label="Handling Unit Team" />
                            <Dropdown isFloatableLabel label="Team" />
                        </div>
                        <div class="col-span-1">
                            <Button backgroundColor="var(--primary-color)" style="margin-bottom:6%" label="Add >" />
                            <Button backgroundColor="var(--primary-color)" style="margin-bottom:2%" label="< Remove" />
                        </div>
                        <div class="col-span-6">
                            <TextArea name="MarketRemarks" :is-floatable-label="true" />
                        </div>
                    </div>
                </div>

                <!-- Introducer Information -->
                <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                    <div class="font-semibold text-sm mb-4">Introducer Information</div>
                    <div class="grid grid-cols-4 gap-5">
                        <Dropdown isFloatableLabel label="Bank Name" />
                        <TextBox isFloatableLabel label="A/C No" />
                        <Dropdown isFloatableLabel label="Branch Name" />
                        <TextBox isFloatableLabel label="Introducer Name" />
                    </div>
                </div>

                <!-- Footer Buttons -->
                <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-11"></div>
                        <div class="col-span-1 ">
                            <Button @Button-onClick="processOKButtonOnClick" backgroundColor="var(--primary-color)"
                                label="OK" />
                        </div>
                        <!-- <div class="col-span-1 ">
                            <Button backgroundColor="var(--primary-color)" label="Exit" />
                        </div> -->
                    </div>
                </div>
            </AccordionContent>
        </AccordionPanel>
    </Accordion>
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
                    Reference Code is <b>A17086</b>
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
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-4"></div>
                    <div class="col-span-4">
                        <Button label="OK" backgroundColor="var(--primary-color)" name="okButton"
                            @button-on-click="handleOk" />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import {
    TextBox,
    Button,
    Table,
    Dropdown,
    Checkbox,
    RadioButton,
    TextArea,
    Label,
    FileUpload
} from '@cms/ui-components';
const router = useRouter();
///////////////////////////Panel Visibility/////////////////////////////////////
const openCustomer = ref(true);
const openFastAccount = ref(false);
const openBiometricDetails = ref(false);
const openBiometricVerification = ref(false);
const openEntityDetails = ref(false);
const openTaggingCifEntity = ref(false);
const openAddandView = ref(false);
const openProcessFastAccount = ref(false);
const checkBiometric = ref(false)
///////////////////////////Refs///////////////////////////////////////////////////
const panel0 = ref(null)
const panel1 = ref(null)
const panel2 = ref(null)
const panel3 = ref(null)
const panel4 = ref(null)
const panel5 = ref(null)
const panel6 = ref(null)
const panel7 = ref(null)
const enableDisabledProcessButton = computed(() => {
    return !(checkBiometric.value);
});
///////////////////////////model///////////////////////////////////////////////////
const activeNames = ref(['0']);
const successDialog = ref(false);
const onBiometricCurrentRow = ref(null)
const entityName = ref('');
const regNo = ref('');
const regCountry = ref('');
const ntn = ref('');
const houseNo = ref('');
const country = ref('');
const streetName = ref('');
const city = ref('');
const area = ref('');
const province = ref('');
const chequeBookRequired = ref(false);
const acNotes = ref('');
const isResident = ref(false);
const CustomerTextBoxProps = ref({
    mandatory: false,
    modelValue: '000485 ',
    name: 'CustomerTextBox',
    label: 'Customer No.',
    isDisabled: true,
    dataType: 'alphaNumericSpecial',
    maxLength: 20
});
const ACOpeningTextBoxProps = ref({
    mandatory: false,
    modelValue: '01/12/2025',
    name: 'ACOpeningTextBox',
    label: 'A/C Opening Date',
    isDisabled: true,
    dataType: 'alphaNumericSpecial',
    maxLength: 10
})
const ReferenceNoTextBoxProps = ref({
    mandatory: false,
    modelValue: '',
    name: 'ReferenceNoTextBox',
    label: 'Reference No',
    isDisabled: false,
    dataType: 'alphaNumericSpecial',
    maxLength: 20
})
const RunNoTextBoxProps = ref({
    mandatory: false,
    modelValue: '',
    name: 'RunNoTextBox',
    label: 'Running No',
    isDisabled: false,
    dataType: 'alphaNumericSpecial',
    maxLength: 2
})
const CheckDigitTextBoxProps = ref({
    mandatory: false,
    modelValue: '',
    name: 'CheckDigitTextBox',
    label: 'Check Digit',
    isDisabled: true,
    dataType: 'alphaNumericSpecial',
    maxLength: 1
})
const ACCurrencyTextBoxProps = ref({
    modelValue: '',
    mandatory: false,
    name: 'ACCurrencyTextBox',
    label: 'A/C Currency',
    isDisabled: true,
    dataType: 'alphaNumericSpecial',
    maxLength: 30
})
const BranchDropdownProps = ref({
    label: 'Branch',
    mandatory: false,
    optionsList: [
        {
            label: '1016 - Wells Fargo Branch',
            value: '1016 - Wells Fargo Branch'
        }
    ],
    name: 'BranchDropdown',
    modelValue: '1016 - Wells Fargo Branch',
    isDisabled: true,
});
const CategoryDropDownProps = ref({
    mandatory: false,
    label: 'Category',
    optionsList: [
        {
            label: 'COMPANY ACCOUNT - LC',
            value: 'COMPANY ACCOUNT - LC'
        }
    ],
    name: 'CategoryDropDown',
    mandatory: false,
    modelValue: '',
    isDisabled: false,
})
const AccountNatureDropDownProps = ref({
    label: 'A/C Nature',
    mandatory: false,
    optionsList: [
        {
            label: 'PUBLIC LIMITED COMPANY - 08',
            value: 'PUBLIC LIMITED COMPANY - 08'
        }
    ],
    name: 'AccountNatureDropDown',
    modelValue: '',
    isDisabled: false,
})
const MajClassificationDropDownProps = ref({
    mandatory: false,
    label: 'Major Classification',
    optionsList: [
        { label: 'Service Fees', value: 'service_fees' },
        { label: 'Subscription Income', value: 'sub_income' },
        { label: 'Direct Sales', value: 'direct_sales' }
    ],
    name: 'MajClassificationDropDown',
    modelValue: 'Current',
    isDisabled: false,
})
const SubClassificationDropDownProps = ref({
    mandatory: false,
    label: 'Sub Classification',
    optionsList: [
        { label: 'Vendor Payments', value: 'vendor_pay' },
        { label: 'Payroll', value: 'payroll' },
        { label: 'Tax Deductions', value: 'tax_deduction' }
    ],
    name: 'SubClassificationDropDown',
    modelValue: 'Current',
    isDisabled: false,
})
const ACTypesDropDownProps = ref({
    mandatory: false,
    label: 'A/C Type',
    optionsList: [
        {
            label: 'CURRENT ACCOUNT - 0081',
            value: 'CURRENT ACCOUNT - 0081'
        }
    ],
    name: 'ACTypeDropdown',
    modelValue: '',
    isDisabled: false,
})
const biometricColumns = ref([
    { prop: 'idDocType', label: 'ID Doc Type', width: 120 },
    { prop: 'idDocNo', label: 'ID Doc No', width: 180 },
    { prop: 'fingerNo', label: 'Finger No.', width: 90, align: 'center' },
    { prop: 'cnicName', label: 'CNIC Name', width: 160 },
    { prop: 'response', label: 'Response/Exception', width: 220 },
    { prop: 'nadraStatus', label: 'Nadra Status', width: 160 },
    { prop: 'accountNature', label: 'Account Nature', width: 180 },
    { prop: 'screenedStatus', label: 'Screened Status', width: 160, align: 'center' },
    { prop: 'screenedDesc', label: 'Screened Description', width: 260 }
])

const biometricData = ref([
    {
        idDocType: 'CNIC',
        idDocNo: '4220141992672',
        fingerNo: '0',
        cnicName: '',
        response: 'PERMANENT DISABILITY',
        nadraStatus: 'NOT VERIFIED',
        accountNature: 'Current',
        screenedStatus: 'Y',
        screenedDesc: ''
    }
])
// Table Columns Definition
const cifColumns = ref([
    { prop: 'cif', label: 'CIF', width: 100 },
    { prop: 'ntn', label: 'NTN', width: 140 },
    { prop: 'regNo', label: 'Reg No', width: 140 },
    { prop: 'customerName', label: 'Customer Name', width: 200 },
    { prop: 'telNo', label: 'Tel No', width: 130 },
    { prop: 'address', label: 'Address', width: 250 },
    { prop: 'address2', label: 'Address2', width: 200 },
    { prop: 'address3', label: 'Address3', width: 200 },
    { prop: 'country', label: 'Country', width: 150 },
    { prop: 'city', label: 'City', width: 130 },
    { prop: 'regDate', label: 'Reg Date', width: 120, align: 'center' }
])

// Table Data Row
const cifData = ref([
    {
        cif: '11001202',
        ntn: '42201-XXXXXXX-1',
        regNo: 'REG-99082',
        customerName: 'TRUSTEE1',
        telNo: '021-3456789',
        address: 'H',
        address2: 'S',
        address3: 'A',
        country: 'PAKISTAN-586',
        city: 'KARACHI-101',
        regDate: '2022.11.25'
    }
])

// Filter State for Inputs
const filter = ref({
    ntn: '',
    regNo: '',
    idCategory: 'CNIC/NICOP/POC-01',
    idNo: '',
    cif: '',
    name: ''
})

const isNewCif = ref(false)
// Nationalities Data
const availableNationalities = ref([
    { name: 'AFGHAN', code: '004' },
    { name: 'ALBANIAN', code: '008' },
    { name: 'ALGERIAN', code: '012' },
    { name: 'AMERICAN', code: '840' },
    { name: 'ANDORRAN', code: '020' },
    { name: 'ANGOLAN', code: '024' },
    { name: 'ANTIGUAN', code: '028' },
    { name: 'ARGENTINE', code: '032' },
    { name: 'ARMENIAN', code: '051' },
    { name: 'AUSTRALIAN', code: '036' },
    { name: 'AUSTRIAN', code: '040' },
    { name: 'AZERBAIJANI', code: '031' },
    { name: 'BAHAMIAN', code: '044' },
    { name: 'BAHRAINI', code: '048' },
    { name: 'BANGLADESHI', code: '050' },
    { name: 'BARBADIAN', code: '052' },
    { name: 'BELARUSIAN', code: '112' },
    { name: 'BELGIAN', code: '056' },
    { name: 'BELIZEAN', code: '084' },
    { name: 'BENINESE', code: '204' },
    { name: 'BHUTANESE', code: '064' },
    { name: 'BOLIVIAN', code: '068' },
    { name: 'BOSNIAN', code: '070' },
    { name: 'BRAZILIAN', code: '076' },
    { name: 'BRITISH', code: '826' },
    { name: 'BRUNEIAN', code: '096' },
    { name: 'BULGARIAN', code: '100' },
    { name: 'CAMBODIAN', code: '116' },
    { name: 'CAMEROONIAN', code: '120' },
    { name: 'CANADIAN', code: '124' },
    { name: 'CHILEAN', code: '152' },
    { name: 'CHINESE', code: '156' },
    { name: 'COLOMBIAN', code: '170' },
    { name: 'CONGOLESE', code: '178' },
    { name: 'COSTA RICAN', code: '188' },
    { name: 'CROATIAN', code: '191' },
    { name: 'CUBAN', code: '192' },
    { name: 'CYPRIOT', code: '196' },
    { name: 'CZECH', code: '203' },
    { name: 'DANISH', code: '208' },
    { name: 'DJIBOUTIAN', code: '262' },
    { name: 'DOMINICAN', code: '214' },
    { name: 'DUTCH', code: '528' },
    { name: 'ECUADORIAN', code: '218' },
    { name: 'EGYPTIAN', code: '818' },
    { name: 'EMIRATI', code: '784' },
    { name: 'ESTONIAN', code: '233' },
    { name: 'ETHIOPIAN', code: '231' },
    { name: 'FIJIAN', code: '242' },
    { name: 'FILIPINO', code: '608' },
    { name: 'FINNISH', code: '246' },
    { name: 'FRENCH', code: '250' },
    { name: 'GEORGIAN', code: '268' },
    { name: 'GERMAN', code: '276' },
    { name: 'GHANAIAN', code: '288' },
    { name: 'GREEK', code: '300' },
    { name: 'GUATEMALAN', code: '320' },
    { name: 'HAITIAN', code: '332' },
    { name: 'HONDURAN', code: '340' },
    { name: 'HUNGARIAN', code: '348' },
    { name: 'ICELANDIC', code: '352' },
    { name: 'INDIAN', code: '356' },
    { name: 'INDONESIAN', code: '360' },
    { name: 'IRANIAN', code: '364' },
    { name: 'IRAQI', code: '368' },
    { name: 'IRISH', code: '372' },
    { name: 'ITALIAN', code: '380' },
    { name: 'JAMAICAN', code: '388' },
    { name: 'JAPANESE', code: '392' },
    { name: 'JORDANIAN', code: '400' },
    { name: 'KAZAKH', code: '398' },
    { name: 'KENYAN', code: '404' },
    { name: 'KUWAITI', code: '414' },
    { name: 'LATVIAN', code: '428' },
    { name: 'LEBANESE', code: '422' },
    { name: 'LIBYAN', code: '434' },
    { name: 'MALAYSIAN', code: '458' },
    { name: 'MALDIVIAN', code: '462' },
    { name: 'MEXICAN', code: '484' },
    { name: 'MOROCCAN', code: '504' },
    { name: 'NEPALESE', code: '524' },
    { name: 'NEW ZEALANDER', code: '554' },
    { name: 'NIGERIAN', code: '566' },
    { name: 'NORWEGIAN', code: '578' },
    { name: 'OMANI', code: '512' },
    { name: 'PAKISTANI', code: '586' },
    { name: 'PALESTINIAN', code: '275' },
    { name: 'PANAMANIAN', code: '591' },
    { name: 'PARAGUAYAN', code: '600' },
    { name: 'PERUVIAN', code: '604' },
    { name: 'POLISH', code: '616' },
    { name: 'PORTUGUESE', code: '620' },
    { name: 'QATARI', code: '634' },
    { name: 'ROMANIAN', code: '642' },
    { name: 'RUSSIAN', code: '643' },
    { name: 'SAUDI', code: '682' },
    { name: 'SINGAPOREAN', code: '702' },
    { name: 'SOUTH AFRICAN', code: '710' },
    { name: 'SPANISH', code: '724' },
    { name: 'SRI LANKAN', code: '144' },
    { name: 'SUDANESE', code: '729' },
    { name: 'SWEDISH', code: '752' },
    { name: 'SWISS', code: '756' },
    { name: 'SYRIAN', code: '760' },
    { name: 'THAI', code: '764' },
    { name: 'TUNISIAN', code: '788' },
    { name: 'TURKISH', code: '792' },
    { name: 'UGANDAN', code: '800' },
    { name: 'UKRAINIAN', code: '804' },
    { name: 'URUGUAYAN', code: '858' },
    { name: 'UZBEK', code: '860' },
    { name: 'VENEZUELAN', code: '862' },
    { name: 'VIETNAMESE', code: '704' },
    { name: 'YEMENI', code: '887' },
    { name: 'ZIMBABWEAN', code: '716' }
]);

const selectedNationalities = ref([
])
const activeAvailable = ref(null)
const activeSelected = ref(null)
////////////////////////////////////////Actions//////////////////////
const nextButtonClick = () => {
    openFastAccount.value = true
    activeNames.value.push('1')
    setTimeout(() => {
        panel1.value?.$el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }, 0);
}
const fetchButtonOnClick = () => {
    openProcessFastAccount.value = false
    checkBiometric.value = true
    openBiometricDetails.value = true
    activeNames.value.push('2')
    setTimeout(() => {
        panel2.value?.$el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }, 0);
}
const ACTypeDropDownChange = () => {
    ACCurrencyTextBoxProps.value.modelValue = 'PAKISTANI RUPEE - 586'
    ACCurrencyTextBoxProps.value.isDisabled = true
}
const onRunNoBlur = () => {
    CheckDigitTextBoxProps.value.modelValue = '5'

    CheckDigitTextBoxProps.value.isDisabled = true
}
const onBiometricRowClick = (event) => {
    onBiometricCurrentRow.value = event
}
const viewDetailsButtonOnClick = () => {
    if (!onBiometricCurrentRow.value) {
        return;
    }
    openBiometricVerification.value = true
    activeNames.value.push('3')
    setTimeout(() => {
        panel3.value?.$el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }, 0);
}
const entityButtonOnClick = () => {
    openEntityDetails.value = true
    activeNames.value.push('4')
    setTimeout(() => {
        panel4.value?.$el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }, 0);
}
const tagCIFButtonOnClick = () => {
    openTaggingCifEntity.value = true
    activeNames.value.push('5')
    setTimeout(() => {
        panel5.value?.$el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }, 0);
}
const addViewButtonOnClick = () => {
    openAddandView.value = true
    activeNames.value.push('6')
    setTimeout(() => {
        panel6.value?.$el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }, 0);
}
const fastOKButtonOnClick = () => {
    openBiometricDetails.value = false;
    openBiometricVerification.value = false;
    openEntityDetails.value = false;
    openTaggingCifEntity.value = false;
    openAddandView.value = false;
    openProcessFastAccount.value = true
    activeNames.value.push('7')
    setTimeout(() => {
        panel7.value?.$el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }, 0);
}
const processOKButtonOnClick = () => {
    successDialog.value = true
}
const handleOk = () => {
    successDialog.value = false
    router.push({ name: 'CustomerOnboarding&Management' }) // 👈 change route
}
// Logic Placeholders
// 1. Add All
const addAll = () => {
    selectedNationalities.value.push(...availableNationalities.value)
    availableNationalities.value = []
    activeAvailable.value = null
}

// 2. Add Single (Selected)
const addSelected = () => {
    if (activeAvailable.value) {
        selectedNationalities.value.push(activeAvailable.value)
        availableNationalities.value = availableNationalities.value.filter(n => n.code !== activeAvailable.value.code)
        activeAvailable.value = null // reset selection
    }
}

// 3. Remove Single
const removeSelected = () => {
    if (activeSelected.value) {
        availableNationalities.value.push(activeSelected.value)
        selectedNationalities.value = selectedNationalities.value.filter(n => n.code !== activeSelected.value.code)
        activeSelected.value = null // reset selection
    }
}

// 4. Remove All
const removeAll = () => {
    availableNationalities.value.push(...selectedNationalities.value)
    selectedNationalities.value = []
    activeSelected.value = null
}
</script>
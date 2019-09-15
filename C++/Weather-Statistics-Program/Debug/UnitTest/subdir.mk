################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
CPP_SRCS += \
../UnitTest/BST_Test.cpp \
../UnitTest/Data_test.cpp \
../UnitTest/Date_Test.cpp \
../UnitTest/Time_Test.cpp \
../UnitTest/Utility_test.cpp \
../UnitTest/Vector_Test.cpp \
../UnitTest/Weather_test.cpp \
../UnitTest/WindLogType_test.cpp 

OBJS += \
./UnitTest/BST_Test.o \
./UnitTest/Data_test.o \
./UnitTest/Date_Test.o \
./UnitTest/Time_Test.o \
./UnitTest/Utility_test.o \
./UnitTest/Vector_Test.o \
./UnitTest/Weather_test.o \
./UnitTest/WindLogType_test.o 

CPP_DEPS += \
./UnitTest/BST_Test.d \
./UnitTest/Data_test.d \
./UnitTest/Date_Test.d \
./UnitTest/Time_Test.d \
./UnitTest/Utility_test.d \
./UnitTest/Vector_Test.d \
./UnitTest/Weather_test.d \
./UnitTest/WindLogType_test.d 


# Each subdirectory must supply rules for building sources it contributes
UnitTest/%.o: ../UnitTest/%.cpp
	@echo 'Building file: $<'
	@echo 'Invoking: GCC C++ Compiler'
	g++ -O0 -g3 -Wall -c -fmessage-length=0 -MMD -MP -MF"$(@:%.o=%.d)" -MT"$(@)" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '



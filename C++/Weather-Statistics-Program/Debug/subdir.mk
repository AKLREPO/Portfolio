################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
CPP_SRCS += \
../Data.cpp \
../Date.cpp \
../Program.cpp \
../Time.cpp \
../Utility.cpp \
../Weather.cpp \
../WindLogType.cpp \
../main.cpp 

OBJS += \
./Data.o \
./Date.o \
./Program.o \
./Time.o \
./Utility.o \
./Weather.o \
./WindLogType.o \
./main.o 

CPP_DEPS += \
./Data.d \
./Date.d \
./Program.d \
./Time.d \
./Utility.d \
./Weather.d \
./WindLogType.d \
./main.d 


# Each subdirectory must supply rules for building sources it contributes
%.o: ../%.cpp
	@echo 'Building file: $<'
	@echo 'Invoking: GCC C++ Compiler'
	g++ -O0 -g3 -Wall -c -fmessage-length=0 -MMD -MP -MF"$(@:%.o=%.d)" -MT"$(@)" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '


